import { useEffect, useRef, useState } from "react";
import { useModal } from "../../../context/PopUpModalContext";
import DatePickerAction from "../Controls/DatePickerAction";
import AttachmentAction from "../Controls/AttachmentAction";
import Priority from "../Controls/Priority";
import { useData } from "../../../context/TaskDatabase";

const AddPageTask = ({ setAddTaskModal }) => {
  const [focused, setFocused] = useState(false);
  const [isInputNull, setIsInputNull] = useState(true);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const { isAddTaskOpen, setIsAddTaskOpen } = useModal();
  const { data, setData } = useData();
  const modalRef = useRef(null);

  // Handle add task and search pop menus
  function handlePopupMenu() {
    setAddTaskModal(false);
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

  // Handle title change - Enable add task btn - capture title value
  function handleInputChange(e) {
    if (e.target.value !== "") {
      setIsInputNull(false);
      setTitleValue(e.target.value);
    } else {
      setIsInputNull(true);
    }
  }

  // Handle description change - capture description value
  function handleDescriptionInputChange(e) {
    setDescriptionValue(e.target.value);
  }

  // Add New Task to database/local storage
  function handleAddNewTask() {
    setData((prevData) => [
      ...prevData,
      {
        id: prevData[prevData.length - 1].id + 1,
        taskTitle: titleValue,
        description: descriptionValue,
      },
    ]);
    handlePopupMenu();
  }

  return (
    <div
      ref={modalRef}
      className={`flex-col w-full px-14 right-0 left-0 mx-auto top-[calc(13vh-32px)] flex`}
    >
      <div
        className={`w-full bg-white border-[1px] border-[#e6e6e6] rounded-[10px] h-fit right-0 left-0 mx-auto`}
      >
        <div className="p-3 flex flex-col border-b-[1px] border-[#e6e6e6]">
          <div className="relative flex">
            <input
              className="outline-none "
              type="text"
              name="title"
              id="title"
              placeholder="Title of the task"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={handleInputChange}
            />
            {!focused && (
              <span className="absolute left-[-2px] animate-blink pointer-events-none top-[-8px] text-[22px]">
                |
              </span>
            )}
          </div>
          <input
            className="outline-none mt-1"
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleDescriptionInputChange}
          />

          <div className="flex gap-2 mt-2">
            <DatePickerAction />
            <AttachmentAction />
            <Priority />
          </div>
        </div>
        <div className="m-4 flex gap-2 justify-end">
          <button
            className="bg-[#0000000a] px-3 py-1 rounded-[5px]"
            onClick={() => handlePopupMenu()}
          >
            <span>Cancel</span>
          </button>

          <button
            className={`px-3 py-1 rounded-[5px] text-white  ${isInputNull ? "bg-[#eda59e] cursor-not-allowed" : "bg-[#d33322] cursor-pointer"}`}
            onClick={handleAddNewTask}
          >
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPageTask;
