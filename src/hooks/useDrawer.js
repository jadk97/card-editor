import { useState } from "react";

export const useDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const open = visible && selectedCardId;

  const handleClose = () => {
    setVisible(false);
  };

  const showDrawer = (cardId) => {
    setVisible(true);
    setSelectedCardId(cardId);
  };

  const hideDrawer = () => {
    setVisible(false);
  };

  const cleanup = () => {
    setSelectedCardId(null);
  };

  return { open, showDrawer, hideDrawer, handleClose, selectedCardId, cleanup };
};
