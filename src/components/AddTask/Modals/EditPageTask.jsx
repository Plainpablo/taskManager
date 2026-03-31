import { useState } from "react";
import { useModal } from "../../../context/PopUpModalContext";
import DatePickerAction from "../Controls/DatePickerAction";
import AttachmentAction from "../Controls/AttachmentAction";
import Priority from "../Controls/Priority";

export const EditPageTask = ({ taskTitle, description, setIsEditTask }) => {
  const [focused, setFocused] = useState(false);
  const [isInputNull, setIsInputNull] = useState(true);
  const [titleValue, setTitleValue] = useState(taskTitle);
  const [descriptionValue, setDescriptionValue] = useState(description);

  function handleInputChange() {}
  function handlePopupMenu() {}

  function handleInputChange(e) {
    e.target.value !== ""
      ? setIsInputNull(false)
      : setIsInputNull(true);
      setTitleValue(e.target.value)
  }
  
  function handleDescriptionInputChange(e) {
      setDescriptionValue(e.target.value)
  }
  return (
    <div
      className={`flex-col w-full right-0 left-0 mx-auto top-[calc(13vh-32px)] flex`}
    >
      <div
        className={`w-full bg-white border-[1px] border-[#e6e6e6] rounded-[10px] h-fit right-0 left-0 mx-auto`}
      >
        <div className="p-3 flex flex-col border-b-[1px] border-[#e6e6e6]">
          <div className="relative flex">
            <input
              className="outline-none "
              type="text"
              name=""
              id=""
              placeholder="Title of the task"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={handleInputChange}
              value={titleValue}
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
            name=""
            id=""
            placeholder="Description"
            onChange={handleDescriptionInputChange}
            value={descriptionValue}
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
            onClick={() => setIsEditTask(false)}
          >
            <span>Cancel</span>
          </button>
          <button
            className={`px-3 py-1 rounded-[5px] text-white  ${isInputNull ? "bg-[#eda59e] cursor-not-allowed" : "cursor-auto bg-[#d33322]"}`}
          >
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </div>
  );
};
