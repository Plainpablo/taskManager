import { createContext, useContext, useState } from "react";

const LabelsContext = createContext();

export const LabelsProvider = ({ children }) => {
  const [isAddLabelOpen, setIsAddLabelOpen] = useState(false);
  const [labels, setLabels] = useState(["kk","kk02", ,"kk03","kk04"])


  return (
    <LabelsContext.Provider value={{ isAddLabelOpen, setIsAddLabelOpen, }}>
      {children}
    </LabelsContext.Provider>
  );
};

export const useLabels = () => useContext(LabelsContext)
