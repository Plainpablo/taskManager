import { createContext, useContext, useState } from "react";

const TaskDatabaseContex = createContext();

export const TaskDatabaseProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      taskTitle: "Task 01",
      description: "Description test!!",
    },
    {
      taskTitle: "Task 02",
      description: "Description test!!",
    },
  ]);

  return (
    <TaskDatabaseContex.Provider value={{ data, setData }}>
      {children}
    </TaskDatabaseContex.Provider>
  );
};

export const useData = () => {
    return useContext(TaskDatabaseContex);
}
