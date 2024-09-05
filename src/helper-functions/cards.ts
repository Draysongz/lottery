import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"
import { app } from "../firebase/firebase"
import { getUserLevelData, User } from "./getUser"

const db = getFirestore(app)

const section = collection(db, "Games")

type Game = {
    gameId: string;
    participants: User[];
    totalSlots: number;
    prizePool: number;
    status: 'pending' | 'active' | 'completed'; // Changed to string literals for better clarity
    winner: User | null; // The winner will be a participant, or null if no winner yet
    ticketPrice: number;
    slotsAvailable: number; // Optional: Tracks remaining slots
    createdAt: Date; // Optional: Track when the game was created
    drawnAt: Date | null; // Optional: Track when the game was drawn
};

async function createCards(data: Game) {
  const exist = await checkCardExist(data.gameId);
  if (!exist) {
    try {
      const docRef = await addDoc(section, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  } else {
    console.log("Document already exists with gameId: ", data.gameId);
  }
}


async function checkCardExist(gameId: string) {
  const docQ = query(section, where("gameId", "==", gameId)); // Fixed field name to match type definition
  const qs = await getDocs(docQ);
  return !qs.empty;
}


async function getCardsByCategory(category: string) {
  const docQ = query(section, where("category", "==", category));
  const qs = await getDocs(docQ);
  return qs.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Return documents with IDs
}


async function getCard(userId: number, documentId: string) {
  try {
    const data = await getUserLevelData(userId);
    const cardData = data.find(
      (card: { card: { id: string } }) => card.card.id === documentId
    );
    return cardData || null; // Ensure function returns null if cardData is not found
  } catch (err) {
    console.error("Error fetching card data: ", err);
    return null; // Return null in case of an error
  }
}


export { createCards, getCardsByCategory, getCard }
