import { createContext } from "react";

export const CardsContext = createContext({
  cards: [],
  duplicateCard: () => {},
  deleteCard: () => {},
  editCard: () => {},
});
