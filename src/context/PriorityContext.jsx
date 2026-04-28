import { createContext, useContext, useEffect, useState } from "react";

import { FlagIcon as FlagIconSolid } from "@heroicons/react/24/solid";
import { FlagIcon } from "@heroicons/react/24/outline";

const PriorityContext = createContext();

export const PriorityProvider = ({ children }) => {
  const [selectedPriority, setSelectedPriority] = useState(0);
  const [isPriorityDropOpen, setIsPriorityDropOpen] = useState(false);


  const [displayPriority, setDisplayPriority] = useState({
    icon: FlagIcon,
    title: "Priority 4",
    color: "#666",
    abbr: "P4",
  });


  const priorityList = [
    {
      icon: FlagIconSolid,
      title: "Priority 1",
      color: "#d1453b",
      abbr: "P1",
    },
    {
      icon: FlagIconSolid,
      title: "Priority 2",
      color: "#eb8909",
      abbr: "P2",
    },
    {
      icon: FlagIconSolid,
      title: "Priority 3",
      color: "#246fe0",
      abbr: "P3",
    },
    { icon: FlagIcon, title: "Priority 4", color: "#666", abbr: "P4" },
  ];
  //   Set display priority
  useEffect(() => {
      priorityList.forEach((element, index) => {
        if (index === selectedPriority) {
          setDisplayPriority(element);
        }
      });
  },[selectedPriority])

  return (
    <PriorityContext.Provider
      value={{ selectedPriority, setSelectedPriority, displayPriority, isPriorityDropOpen, setIsPriorityDropOpen }}
    >
      {children}
    </PriorityContext.Provider>
  );
};

export const usePriority = () => useContext(PriorityContext);
