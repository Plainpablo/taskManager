import { Children, createContext, useContext, useState } from "react";

const DisplayModalContext = createContext();

export const DisplayModalProvider = ({ children }) => {
  const [isLayoutOption, setIsLayoutOption] = useState(0);

  return (
    <DisplayModalContext.Provider value={{ isLayoutOption, setIsLayoutOption }}>
      {children}
    </DisplayModalContext.Provider>
  );
};

export const useDisplayModal = () => useContext(DisplayModalContext);


