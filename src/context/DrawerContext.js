import { createContext } from "react";

export const DrawerContext = createContext({
  visible: false,
  open: false,
  selectedCardId: null,
  showDrawer: () => {},
  handleClose: () => {},
  cleanup: () => {},
});
