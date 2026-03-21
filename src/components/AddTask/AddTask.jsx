import { useEffect, useRef, useState } from "react";
import { useModal } from "../../context/PopUpModalContext";

const AddTask = () => {
  const [focused, setFocused] = useState(false);
  const { isAddTaskOpen, setIsAddTaskOpen } = useModal();
  const modalRef = useRef(null);

  // Handle add task and search pop menus
  function handlePopupMenu() {
    setIsAddTaskOpen(false);
  }

  // Close pop with outside click
  useEffect(() => {
    function handleClickOutSide(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsAddTaskOpen(false);
      }
    }

    if (isAddTaskOpen) {
      document.addEventListener("mousedown", handleClickOutSide);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isAddTaskOpen]);

  return (
    <div
      ref={modalRef}
      className={`fixed z-20 flex-col w-full max-w-[550px] p-8 right-0 left-0 mx-auto top-[calc(13vh-32px)] ${isAddTaskOpen ? "flex pointer-events-auto" : "pointer-events-none hidden"}`}
    >
      <div
        className={`w-full bg-white shadow-[0_15px_50px_rgba(0,0,0,0.35)] rounded-[10px] h-fit right-0 left-0 mx-auto`}
      >
        <div className="p-3 flex flex-col border border-b-[1px] border-[#e6e6e6]">
          <div className="relative flex">
            <input
              className="outline-none "
              type="text"
              name=""
              id=""
              placeholder="Title of the task"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            {!focused && (
              <span className="absolute left-[-2px] animate-blink pointer-events-none top-[-8px] text-[22px]">
                |
              </span>
            )}
          </div>
          <input
            className="outline-none"
            type="text"
            name=""
            id=""
            placeholder="Description"
          />
          <div className="flex gap-2">
            <button>Today</button>
            <button>Attachment</button>
            <button>Priority</button>
          </div>
        </div>
        <div className="m-4 flex gap-2 justify-end">
          <button
            className="bg-[#0000000a] px-3 py-1 rounded-[5px]"
            onClick={() => handlePopupMenu()}
          >
            <span>Cancel</span>
          </button>
          <button className="px-3 py-1 rounded-[5px] bg-[#eda59e] text-white cursor-not-allowed">
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
