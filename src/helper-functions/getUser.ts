/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  arrayUnion,
  increment,
  onSnapshot,
} from "firebase/firestore"
import { app } from "../firebase/firebase"

const db = getFirestore(app)

export type User = {
  name: string;
  referralLink: string;
  referrals: number[]; // Array of userIds that this user has referred
  userId: number;
  gamesPlayed: Game[]; // Array of games the user has played
  gamesWon: number;
  walletAddress: string;
  gamesLost: number;
  freeTickets: number
  currentGames: Game[]; // Array of games the user is currently participating in
};

export type Game = {
  gameId: number;
  slotsPurchased: number[];
  winningStatus: boolean;
  prizeAmount: number;
  status: 'in-progress' | 'completed'; // Status of the game
};


async function getQuerySnapshot(userId: number) {
  const q = query(collection(db, "users"), where("userId", "==", userId))
  const qs = await getDocs(q)
  return qs
}

async function getUserData(userId: number, name: string, referralId?: number) {
  try {
    const userCollectionRef = collection(db, "users");
    const userQuery = query(userCollectionRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      await createUser(userId, name);
      const newUserQuerySnapshot = await getDocs(userQuery);
      const newUserDoc = newUserQuerySnapshot.docs[0];
      if (referralId && referralId !== userId) {
        await updateReferralData(userId, referralId);
      }
      return { data: newUserDoc.data(), docId: newUserDoc.id };
    } else {
      const userDoc = querySnapshot.docs[0];
      return { data: userDoc.data(), docId: userDoc.id };
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
    return null;
  }
}


async function getUserLevelData(userId: number) {
  const userCollectionRef = collection(db, "users")
  const userQuery = query(userCollectionRef, where("userId", "==", userId))
  const querySnapshot = await getDocs(userQuery)
  const userDoc = querySnapshot.docs[0]
  const userData = userDoc.data()
  return userData.cardLevels
}

function setupRealtimeListener(docId: string, callback: (data: User) => void) {
  const userDocRef = doc(db, "users", docId);
  return onSnapshot(userDocRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const data = docSnapshot.data() as User; // Type assertion
      callback(data);
    } else {
      console.log(`Document with ID ${docId} does not exist.`);
    }
  }, (error) => {
    console.error("Error listening to document changes:", error);
  });
}


// eslint-disable-next-line @typescript-eslint/ban-types
async function updateUserData(userId: number, updates: {}) {
  const qs = await getQuerySnapshot(userId)
  if (qs.empty) {
    console.log("No user found with that ID.")
    return null // Or throw an error if preferred
  }
  const docRef = doc(db, "users", qs.docs[0].id)
  await updateDoc(docRef, { ...updates })
}

async function createUser(userId: number, name: string) {
  const docRef = await addDoc(collection(db, "users"), {
    name,
    referrals: [],
    userId: userId,
    referralLink: null,
  })
  console.log("Document written with ID: ", docRef.id)
}

async function updateReferralData(userId: number, referralId: number) {
  try {
    const qs = await getQuerySnapshot(referralId)
    if (qs.empty) {
      console.log("No user found with that ID.")
      return null // Or throw an error if preferred
    }
    const docRef = doc(db, "users", qs.docs[0].id)
    await updateDoc(docRef, {
      freeTickets: increment(1),
      referrals: arrayUnion(userId),
    })
  } catch (err) {
    console.log(err)
  }
}

async function updateUserGameData(userId: number, gameId: string, slotsPurchased: number[]) {
  try {
    const userDocRef = doc(db, "users", userId.toString());
    await updateDoc(userDocRef, {
      currentGames: arrayUnion({
        gameId,
        slotsPurchased,
        winningStatus: false,
        prizeAmount: 0,
        status: 'in-progress'
      }),
      gamesPlayed: arrayUnion({
        gameId,
        slotsPurchased,
        winningStatus: false,
        prizeAmount: 0,
        status: 'in-progress'
      })
    });
  } catch (err) {
    console.error("Error updating user game data:", err);
  }
}

async function updateUserSlotData(userId: number, gameId: string, winningStatus: boolean, prizeAmount: number) {
  try {
    const userDocRef = doc(db, "users", userId.toString());
    await updateDoc(userDocRef, {
      currentGames: arrayUnion({
        gameId,
        slotsPurchased: [], // Remove specific slot numbers or handle accordingly
        winningStatus,
        prizeAmount,
        status: 'completed'
      }),
      gamesWon: winningStatus ? increment(1) : increment(0),
      gamesLost: !winningStatus ? increment(1) : increment(0),
    });
  } catch (err) {
    console.error("Error updating user slot data:", err);
  }
}

export {
  getUserData,
  updateUserData,
  getQuerySnapshot,
  setupRealtimeListener,
  getUserLevelData,
  updateUserGameData,
  updateUserSlotData,
}
