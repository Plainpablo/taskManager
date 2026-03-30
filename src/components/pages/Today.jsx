import {
  PlusIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import bgImage from "../../assets/images/vacation-vector.png";
import { useState } from "react";
import AddTaskPage from "../AddTask/AddTaskPage";
import TaskItem from "../AddTask/TaskItem";

const Today = () => {
  const [isHover, setIsHover] = useState(false);
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [isTaskListEmpty, setIsTaskListEmpty] = useState(false);

  function handleAddTaskHover(value) {
    value === "MouseEnter"
      ? setIsHover(true)
      : value === "MouseLeave"
        ? setIsHover(false)
        : "";
  }

  function handleAddTask() {
    setAddTaskModal(true);
  }

  const taskList = [
    {
      taskTitle: "Task 01",
      description: "Description test!!",
    },
    {
      taskTitle: "Task 02",
      description: "Description test!!",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex mx-14 mb-3">
        <h1 className="text-2xl font-bold">Today</h1>
      </div>
      {
        <div className="px-14">
          <div className="flex gap-2 mb-2">
            <input className="text-[#666]" type="radio" name="" id="" />
            <span  className="text-[#666]">1 task</span>
          </div>
          <ul className="border-[#eee] border-b-[1px]">
            {taskList.map((task, index) => (
            <TaskItem key={index} taskTitle={task.taskTitle} description={task.description} />
            ))}
          </ul>
        </div>
      }
      {!addTaskModal && (
        <>
          <div className="px-14">
            <button
              className={`flex items-center ${isHover ? "text-[#d33322]" : ""}`}
              onMouseEnter={() => handleAddTaskHover("MouseEnter")}
              onMouseLeave={() => handleAddTaskHover("MouseLeave")}
              onClick={handleAddTask}
            >
              <PlusIcon
                className={`size-[13px] mr-3 ${isHover ? "text-white bg-[#d33322]  rounded-[50%]" : "text-[#d33322]"}`}
              />
              Add task
            </button>
          </div>

          {isTaskListEmpty && (
            <div className="flex flex-col justify-center items-center max-w-[360px] mx-auto">
              <img
                src={bgImage}
                alt="vacation vector image"
                className="max-w-[294px]"
              />
              <div>
                <p className="text-[#202020] font-semibold my-[6px]">
                  Have a marvelous day off, Plain!
                </p>
                <p className="text-[#666] text-sm px-6 mx-6">
                  Schedule days off in the Productivity tab of your Settings
                  menu.
                </p>
              </div>
            </div>
          )}
        </>
      )}
      {addTaskModal && <AddTaskPage setAddTaskModal={setAddTaskModal} />}
    </div>
  );
};

export default Today;
