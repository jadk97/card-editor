import { useState } from "react";

export const useCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      titleText: "Custom Title",
      titleFontSize: 36,
      titleColor: "#0e2748",
      bodyText: "Custom body text",
      bodyFontSize: 16,
      bodyColor: "#4F4F4F",
      borderRadius: 16,
      panelColor: "#FFFFFF",
    },
  ]);

  const duplicateCard = (cardId) => {
    // assume card ids are just integers
    let cardToCopy = cards.find((card) => card.id === cardId);

    let duplicatedCard = { ...cardToCopy, id: cards[cards.length - 1].id + 1 };

    setCards([...cards, duplicatedCard]);
  };

  const deleteCard = (cardId) => {
    let cardRemoved = cards.filter((card) => card.id !== cardId);

    setCards(cardRemoved);
  };

  const editCard = (cardId, data) => {
    let allCardsCopy = [...cards];
    let cardToModifyIndex = allCardsCopy.findIndex(
      (card) => card.id === cardId
    );

    allCardsCopy[cardToModifyIndex] = {
      ...allCardsCopy[cardToModifyIndex],
      ...data,
    };

    setCards(allCardsCopy);
  };

  return { cards, duplicateCard, deleteCard, editCard };
};
