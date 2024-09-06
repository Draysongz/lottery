import {
  addDoc,
  arrayRemove,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore"
import { app } from "../firebase/firebase"
import { getUserLevelData, User } from "./getUser"

const db = getFirestore(app)

const section = collection(db, "Games")

export type Game = {
  gameId: string;
  participants: { userId: number; slotsPurchased: number[] }[];
  totalSlots: number;
  prizePool: number;
  status: 'pending' | 'active' | 'completed';
  winner: number | null; // User ID of the winner
  ticketPrice: number;
  availableSlots: number[]; // Array of available slot numbers
  createdAt: Date;
  drawnAt: Date | null;
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


async function updateGameSlots(gameId: number, purchasedSlots: number[]) {
  try {
    const gameDocRef = doc(db, "games", gameId.toString());
    await updateDoc(gameDocRef, {
      availableSlots: arrayRemove(...purchasedSlots) // Remove purchased slots from available slots
    });
  } catch (err) {
    console.error("Error updating game slots:", err);
  }
}
async function resetGame(gameId: string, data: Game) {
  const gameDocRef = doc(db, "Games", gameId);
  await updateDoc(gameDocRef, {
    participants: [],
    availableSlots: Array.from({ length: data.totalSlots }, (_, i) => i + 1),
    status: 'pending',
    winner: null,
    drawnAt: null,
  });
}


export { createCards, getCardsByCategory, getCard, updateGameSlots, resetGame }
