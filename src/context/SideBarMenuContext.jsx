import { createContext, useContext, useState } from "react";

const SideBarMenuContex = createContext();
export const SideBarMenuProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [hideOpenIcon, setHideOpenIcon] = useState(true);
  return (
    <SideBarMenuContex.Provider value={{ sideBarOpen, setSideBarOpen, hideOpenIcon, setHideOpenIcon}}>
      {children}
    </SideBarMenuContex.Provider>
  );
};

export default function useSideBarMenu() {
  return useContext(SideBarMenuContex);
}
