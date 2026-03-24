import { createContext, useContext, useState } from "react";
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isAddTaskOpen, setIsAddTaskOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
