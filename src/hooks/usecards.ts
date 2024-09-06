import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  createCards,
  getCardsByCategory,
  updateGameSlots,
  resetGame,
  Game,
} from "../helper-functions/cards";

export function useCards(category: string, userId: number | undefined) {
  const [cards, setCards] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      if (!userId) return;
      setIsLoading(true);
      try {
        const cardQs = await getCardsByCategory(category);

        // Process and set the cards in the state
        const fetchedCards = cardQs.docs.map((card: any) => ({
          ...card.data(),
          id: card.id,
        }));

        setCards(fetchedCards);
      } catch (err) {
        console.log("Error fetching cards:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCards();
  }, [category, userId]);

  const addGame = async (data: Game) => {
    try {
      await createCards(data);
      // Optionally, refetch the cards or update the state locally
      setCards((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error adding game:", err);
    }
  };

  const updateSlots = async (gameId: string, purchasedSlots: number[]) => {
    try {
      await updateGameSlots(gameId, purchasedSlots);
      // Optionally, refetch or update the game locally
      setCards((prev) =>
        prev.map((card) =>
          card.gameId === gameId
            ? { ...card, availableSlots: card.availableSlots.filter((slot: number) => !purchasedSlots.includes(slot)) }
            : card
        )
      );
    } catch (err) {
      console.error("Error updating slots:", err);
    }
  };

const resetGameById = async (gameId: string) => {
  try {
    const game = cards.find((card) => card.gameId === gameId);
    if (game) {
      const gameData: Game = {
        gameId: game.gameId,
        participants: game.participants || [],
        totalSlots: game.totalSlots,
        prizePool: game.prizePool,
        status: game.status,
        winner: game.winner || null,
        ticketPrice: game.ticketPrice,
        availableSlots: game.availableSlots || [],
        createdAt: game.createdAt.toDate ? game.createdAt.toDate() : game.createdAt, // Firestore timestamps need to be converted to JS Dates
        drawnAt: game.drawnAt ? (game.drawnAt.toDate ? game.drawnAt.toDate() : game.drawnAt) : null,
      };

      // Call resetGame with the correctly typed game data
      await resetGame(gameId, gameData);

      // Optionally, reset the game locally in state
      setCards((prev) =>
        prev.map((card) =>
          card.gameId === gameId
            ? {
                ...card,
                participants: [],
                availableSlots: Array.from(
                  { length: card.totalSlots },
                  (_, i) => i + 1
                ),
                status: "pending",
                winner: null,
                drawnAt: null,
              }
            : card
        )
      );
    }
  } catch (err) {
    console.error("Error resetting game:", err);
  }
};


  return { isLoading, cards, addGame, updateSlots, resetGameById };
}
