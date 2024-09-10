import { useEffect, useState } from "react";
import {
  getUserData,
  setupRealtimeListener,
  updateUserData,
  updateUserGameData,
  updateUserSlotData,
  User
} from "../helper-functions/getUser";


function useRealtimeUserData(
  userId: number | undefined,
  firstName: string | undefined,
  referralId?: number
) {
  const [userData, setUserData] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState<string | null>(null);
  const [updateStatus, setUpdateStatus] = useState<string | null>(null);
  let unsubscribe: (() => void) | undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId || !firstName) return;

        const result = await getUserData(userId, firstName, referralId);
        if (!result) return;

        const { data, docId } = result; // Destructure the result

        setUserData(data as User);
        setName(firstName);
        setIsLoading(false);

        // Set up real-time listener
        unsubscribe = setupRealtimeListener(docId, (updatedData) => {
          setUserData(updatedData);
        });
      } catch (error) {
        console.log("useRealtimeUserData", error);
      }
    };

    fetchData();

    // Clean up the listener on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [userId, firstName, referralId]);

  // Function to update user data
  const updateUser = async (updates: Partial<User>) => {
    if (userData) {
      try {
        await updateUserData(userData.userId, updates);
        setUpdateStatus("Update successful");
      } catch (error) {
        setUpdateStatus("Update failed");
        console.error("Error updating user data:", error);
      }
    }
  };

  // Function to update game data
  const updateGameData = async (gameId: string, slotsPurchased: number[], prizeAmount: number) => {
    if (userData) {
      try {
        await updateUserGameData(userData.userId, gameId, slotsPurchased, prizeAmount);
        setUpdateStatus("Game data updated successfully");
      } catch (error) {
        setUpdateStatus("Failed to update game data");
        console.error("Error updating user game data:", error);
      }
    }
  };

  // Function to update slot data
  const updateSlotData = async (gameId: string, winningStatus: boolean, prizeAmount: number) => {
    if (userData) {
      try {
        await updateUserSlotData(userData.userId, gameId, winningStatus, prizeAmount);
        setUpdateStatus("Slot data updated successfully");
      } catch (error) {
        setUpdateStatus("Failed to update slot data");
        console.error("Error updating user slot data:", error);
      }
    }
  };
  
  
  return { isLoading, userData, name, updateUser, updateGameData, updateSlotData, updateStatus };

}

// Hook without real-time updates
function useStaticUserData(
  userId: number | undefined,
  firstName: string | null,
  referralId?: number
) {
  const [userData, setUserData] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState<string | null>(null);
  const [updateStatus, setUpdateStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId || !firstName) return;

        const result = await getUserData(userId, firstName, referralId);
        if (!result) return;

        const { data } = result; // Destructure the result
        setUserData(data as User);
        setName(firstName);
        setIsLoading(false);
      } catch (error) {
        console.log("useStaticUserData", error);
      }
    };

    fetchData();
  }, [userId, firstName, referralId]);

  // Function to update user data
  const updateUser = async (updates: Partial<User>) => {
    if (userData && userData.userId) {
      try {
        await updateUserData(userData.userId, updates);
        setUpdateStatus("Update successful");
      } catch (error) {
        setUpdateStatus("Update failed");
        console.error("Error updating user data:", error);
      }
    }
  };

  // Function to update game data
  const updateGameData = async (gameId: string, slotsPurchased: number[], prizePool: number) => {
    if (userData && userData.userId) {
      try {
        await updateUserGameData(userData.userId, gameId, slotsPurchased, prizePool);
        setUpdateStatus("Game data updated successfully");
      } catch (error) {
        setUpdateStatus("Failed to update game data");
        console.error("Error updating user game data:", error);
      }
    }
  };

  // Function to update slot data
  const updateSlotData = async (gameId: string, winningStatus: boolean, prizeAmount: number) => {
    if (userData && userData.userId) {
      try {
        await updateUserSlotData(userData.userId, gameId, winningStatus, prizeAmount);
        setUpdateStatus("Slot data updated successfully");
      } catch (error) {
        setUpdateStatus("Failed to update slot data");
        console.error("Error updating user slot data:", error);
      }
    }
  };

  return { isLoading, userData, name, updateUser, updateGameData, updateSlotData, updateStatus };
}

// Export both hooks
export { useRealtimeUserData, useStaticUserData };
