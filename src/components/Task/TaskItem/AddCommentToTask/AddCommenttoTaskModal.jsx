import {
  CalendarIcon,
  CheckIcon,
  ChevronUpIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  FlagIcon,
  InboxIcon,
  MicrophoneIcon,
  PaperClipIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { PuzzlePiece } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { PriorityDropDown } from "./PriorityDropDown";
import { usePriority } from "../../../../context/PriorityContext";
import { AddLabelDrop } from "./AddLabelDrop";

export const AddCommenttoTaskModal = () => {
  const [isCommentNull, setIsCommentNull] = useState(true);
  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const [rightColInboxHover, setRightColInboxHover] = useState(false);
  const commentRef = useRef(null);

  const { displayPriority, setIsPriorityDropOpen } = usePriority();

  function handleInputValue(e) {
    e.target.value === "" ? setIsCommentNull(true) : setIsCommentNull(false);
  }

  function handleComment() {
    setIsCommentClicked(true);
  }
  function handleCloseComment() {}

  // Comment box outside click
  useEffect(() => {
    function handleOutSideClick(e) {
      if (commentRef.current && !commentRef.current.contains(e.target)) {
        setIsCommentClicked(false);
      }
    }
    if (isCommentClicked) {
      document.addEventListener("click", handleOutSideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [isCommentClicked]);

  return (
    <div className="w-full h-screen bg-[rgba(0,0,0,.4)] fixed z-[90] top-0 left-0 flex items-center justify-center px-[32px] py-[64px]">
      <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.16)] max-w-[864px] w-full h-full rounded-[10px]">
        <header className="flex items-center justify-between px-3 h-[48px] border-b-[1px] border-b-[#eee]">
          <div className="h-8 flex justify-center items-center px-[8px] hover:bg-[#eee] hover:rounded-[5px]">
            <InboxIcon className="size-4 mr-[2px] text-[#666]" />
            <span className="text-[#666]">Inbox</span>
          </div>

          {/* Right SIde Icons */}
          <div className="flex items-center">
            {/* Disabled */}
            <div className="flex items-center justify-center size-8  cursor-not-allowed">
              <ChevronUpIcon className="text-[#b2b2b2] size-4" />
            </div>
            <div className="flex items-center justify-center size-8 hover:bg-[#eee] hover:rounded-[5px]">
              <ChevronDownIcon className="text-[#666] size-4 hover:bg-[#eee] hover:rounded-[5px]" />
            </div>
            <div className="flex items-center justify-center size-8 hover:bg-[#eee] hover:rounded-[5px]">
              <EllipsisHorizontalIcon className="size-[25px] text-[#666] hover:bg-[#eee] hover:rounded-[5px]" />
            </div>
            <div className="flex items-center justify-center size-8 hover:bg-[#eee] hover:rounded-[5px]">
              <XMarkIcon className="size-[18px] text-[#666] hover:bg-[#eee] hover:rounded-[5px]" />
            </div>
          </div>
        </header>
        {/* Body */}
        <div className="grid grid-cols-[minmax(0,1fr)_260px]">
          <div className="flex flex-col items-start px-4 pt-4 min-w-[220px] w-full">
            <div className="flex flex-col gap-2 pb-1">
              <div
                id="taskTitle"
                className="flex justify-center gap-2 items-center"
              >
                <span
                  // onMouseEnter={() => setIsCheckHover(true)}
                  // onMouseLeave={() => setIsCheckHover(false)}
                  className="border-[1px] rounded-full border-[#999] w-[18px] h-[18px] flex justify-center items-center"
                >
                  {/* {isCheckHover && } */}
                  <CheckIcon className="text-[#999] w-3 " />
                </span>
                <span className="text-[#202020] font-semibold text-xl">
                  taskTitle
                </span>
              </div>
              <div id="description" className="flex">
                <span className="w-[26px]"></span>
                <span className="text-[#666]">description</span>
              </div>
            </div>

            {/* Add Sub Task */}
            <div
              id="addSubTask"
              className="ml-[24px] mb-2 flex items-center mt-5 pb-4 border-b-[1px] border-b-[#f5f5f5] w-full"
            >
              <div className="size-6 flex items-center justify-start">
                <PlusIcon className="size-4 text-[#666]" />
              </div>
              <span className="text-[#666] text-sm">Add sub-task</span>
            </div>

            {/* Add comment */}
            <div
              ref={commentRef}
              onClick={handleComment}
              className="pl-[24px] w-full"
            >
              <div
                className={`mt-2 p-4 border-[1px] ${isCommentClicked && "border-[#b8b8b8]"} border-[#e6e6e6] rounded-[10px] w-full flex flex-col`}
              >
                <div className="flex items-start min-h-[50px] max-h-[200px]">
                  <input
                    className="outline-none"
                    type="text"
                    placeholder="comment"
                    onChange={handleInputValue}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="flex items-center justify-center size-8 hover:bg-[#eee] hover:rounded-[5px]">
                      <PaperClipIcon className="size-5 text-[#666]" />
                    </div>
                    <div className="flex items-center justify-center size-8 hover:bg-[#eee] hover:rounded-[5px]">
                      <MicrophoneIcon className="size-5 text-[#666]" />
                    </div>
                    <div className="flex items-center justify-center size-8 hover:bg-[#eee] hover:rounded-[5px]">
                      <FaceSmileIcon className="size-5 text-[#666]" />
                    </div>
                    <div className="flex items-center justify-center size-8 hover:bg-[#eee] hover:rounded-[5px]">
                      <PuzzlePiece className="size-5 text-[#666]" />
                    </div>
                  </div>

                  <div className="m-4 flex gap-2 justify-end">
                    <button
                      className="bg-[#0000000a] px-3 py-1 rounded-[5px]"
                      onClick={handleCloseComment}
                    >
                      <span>Cancel</span>
                    </button>
                    <button
                      className={`px-3 py-1 rounded-[5px] text-white ${isCommentNull ? "bg-[#eda59e] cursor-not-allowed" : "bg-[#d33322] cursor-pointer"}`}
                      // onClick={handleAddNewTask}
                    >
                      <span>Comment</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fcfaf8] h-full flex flex-col items-start p-4">
            <div className="px-2 flex flex-col items-start w-full">
              <span className=" pl-[8px] font-semibold text-sm text-[#666] h-7 flex justify-center items-center">
                Project
              </span>
              <div
                onMouseEnter={() => setRightColInboxHover(true)}
                onMouseLeave={() => setRightColInboxHover(false)}
                className="group h-7 flex flex-row justify-between items-center hover:bg-[#eee] hover:rounded-[5px] w-full "
              >
                <div className="flex items-center pl-[8px] w-full">
                  <InboxIcon className="size-4 mr-[8px] text-[#666]" />
                  <span className="text-[#666]">Inbox</span>
                </div>
                <ChevronDownIcon className="group-hover:flex hidden text-[#202020] size-4 hover:bg-[#eee] hover:rounded-[5px] mr-2" />
              </div>

              <hr className="my-2 border-b-[#eee] w-full ml-2" />
            </div>

            {/* Date */}
            <div className="px-2 flex flex-col items-start w-full">
              <span className=" pl-[8px] font-semibold text-sm text-[#666] h-7 flex justify-center items-center">
                Date
              </span>
              <div
                onMouseEnter={() => setRightColInboxHover(true)}
                onMouseLeave={() => setRightColInboxHover(false)}
                className="group h-7 flex flex-row justify-between items-center hover:bg-[#eee] hover:rounded-[5px] w-full "
              >
                <div className="flex items-center pl-[8px] w-full">
                  <CalendarIcon className="size-4 mr-[8px] text-[#666]" />
                  <span className="text-[#666]">Today</span>
                </div>
                <ChevronDownIcon className="group-hover:flex hidden text-[#202020] size-4 hover:bg-[#eee] hover:rounded-[5px] mr-2" />
              </div>
              <hr className="my-2 border-b-[#eee] w-full ml-2" />
            </div>

            {/* Priority */}
            <div className="px-2 flex flex-col items-start w-full">
              <span className=" pl-[8px] font-semibold text-sm text-[#666] h-7 flex justify-center items-center">
                Priority
              </span>

              <div
              onClick={(e) => { 
                e.stopPropagation();
                setIsPriorityDropOpen(prev => !prev)}}
                onMouseEnter={() => setRightColInboxHover(true)}
                onMouseLeave={() => setRightColInboxHover(false)}
                className="group h-7 flex flex-row justify-center items-center hover:bg-[#eee] hover:rounded-[5px] w-full relative"
              >
                {/* Selected Value Display*/}
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex items-center pl-[8px] w-full">
                    {/* <FlagIcon className="size-4 mr-[8px] text-[#666]" /> */}
                    <displayPriority.icon className ={`size-4 mr-[8px] text-[${displayPriority.color}]`}/>
                    <span className="text-[#666]">{displayPriority.abbr}</span>
                  </div>
                  <ChevronDownIcon className="group-hover:flex hidden text-[#202020] size-4 hover:bg-[#eee] hover:rounded-[5px] mr-2" />
                </div>

                {/* Priority drop-down */}
                  <PriorityDropDown />
              </div>

              <hr className="my-2 border-b-[#eee] w-full ml-2" />
            </div>

            {/* Labels */}
            <div className="group px-2 flex flex-col items-start w-full">
              <div className="flex justify-between items-center w-full hover:bg-[#eee] hover:rounded-[5px] mb-1 h-7 relative">
                <span className=" pl-[8px] font-semibold text-sm text-[#666] group-hover:text-[#202020]">
                  Labels
                </span>
                <PlusIcon className="text-[#666] size-4 group-hover:text-[#202020] hover:rounded-[5px] mr-2" />
                {/* Drop down - add label */}
                <AddLabelDrop/>
              </div>
              {/* Labels display */}
               <div className="group h-7 flex flex-row justify-between items-center w-full ">
                <div className="flex items-center pl-2 bg-[#00000033] rounded-[5px] gap-1 h-7 ml-2">
                  <span className="text-[#202020] text-sm">KK</span>
                  <div className="size-5 flex items-center justify-center">
                    <XMarkIcon className="size-3 text-[#666]" />
                  </div>
                </div>
              </div>

              <hr className="my-2 border-b-[#eee] w-full ml-2" />
            </div>
            {/* Reminders */}
            <div className="px-2 flex flex-col items-start w-full">
              <div className="flex justify-between items-center w-full hover:bg-[#eee] hover:rounded-[5px] mb-1 h-7">
                <span className=" pl-[8px] font-semibold text-sm text-[#666] group-hover:text-[#202020]">
                  Reminders
                </span>
                <PlusIcon className="text-[#666] size-4 group-hover:text-[#202020] hover:rounded-[5px] mr-2" />
              </div>
              <div
                onMouseEnter={() => setRightColInboxHover(true)}
                onMouseLeave={() => setRightColInboxHover(false)}
                className="group h-7 flex flex-row justify-between items-center w-full "
              >
                <div className="flex items-center pl-[8px] w-full">
                  <InboxIcon className="size-4 mr-[8px] text-[#666]" />
                  <span className="text-[#666]">Inbox</span>
                </div>
              </div>
              <hr className="my-2 border-b-[#eee] w-full ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
