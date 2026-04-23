import {
  CheckIcon,
  ChevronUpIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  InboxIcon,
  MicrophoneIcon,
  PaperClipIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { PuzzlePiece } from "phosphor-react";
import { useState } from "react";

export const AddCommenttoTaskModal = () => {
  const [isCommentNull, setIsCommentNull] = useState(true);

  function handleInputValue(e) {
    e.target.value === "" ? setIsCommentNull(true) : setIsCommentNull(false);
  }

  function handleCloseComment() {}

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
            <div className="pl-[24px] w-full">
              <div className="mt-2 p-4 border-[1px] border-[#e6e6e6] rounded-[10px] w-full flex flex-col">
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

          <div className="bg-[#fcfaf8]">Right</div>
        </div>
      </div>
    </div>
  );
};
