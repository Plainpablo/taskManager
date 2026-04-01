import {
  CheckIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { EditPageTask } from "./Modals/EditPageTask";
import {TaskItemOptionsMenu} from "./TaskItemOptionsMenu"    

function TaskItem({ taskTitle, description, id }) {
  const [isCheckHover, setIsCheckHover] = useState(false);
  const [isIteamHover, setIsIteamHover] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);

  function handleEditTask(e) {
    setIsEditTask(true);
  }

  return (
    <>
      {/* Render Tasks  */}
      {!isEditTask && (
        <li
          onMouseEnter={() => setIsIteamHover(true)}
          onMouseLeave={() => setIsIteamHover(false)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex justify-between items-center  py-2">
            <div className="flex relative">
              {isIteamHover && (
                <div className="flex absolute left-[-24px]">
                  <button>
                    <EllipsisVerticalIcon className="w-[18px] text-[#666]" />
                  </button>
                </div>
              )}
              <div className="flex justify-center gap-2 items-center">
                <span
                  onMouseEnter={() => setIsCheckHover(true)}
                  onMouseLeave={() => setIsCheckHover(false)}
                  className="border-[1px] rounded-full border-[#999] w-[18px] h-[18px] flex justify-center items-center"
                >
                  {isCheckHover && <CheckIcon className="text-[#999] w-3 " />}
                </span>
                <span className="text-[#202020]">{taskTitle}</span>
              </div>
            </div>

            {isIteamHover && (
              <div className="flex gap-2 justify-center">
                <button onClick={handleEditTask}>
                  <PencilIcon className="size-[18px] text-[#666]" />
                </button>
                <button>
                  <EllipsisHorizontalIcon className="size-[18px] text-[#666]" />
                </button>
              </div>
            )}
          </div>
          <div className="flex">
            <span className="w-[26px]"></span>
            <span className="text-[#666]">{description}</span>
          </div>
        </li>
      )}

      {/* Render Edit Task Modal  */}
      {isEditTask && (
        <EditPageTask
          id={id}
          taskTitle={taskTitle}
          description={description}
          setIsEditTask={setIsEditTask}
        />
      )}
      {/* Render More Oprions Menu */}
      <TaskItemOptionsMenu/>
    </>
  );
}

export default TaskItem;
