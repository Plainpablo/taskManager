import {
  CalendarDateRangeIcon,
  CalendarIcon,
  ClockIcon,
  DocumentDuplicateIcon,
  EllipsisHorizontalIcon,
  FlagIcon,
  LinkIcon,
  NoSymbolIcon,
  PencilIcon,
  StarIcon,
  SunIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { FlagIcon as FlagSolidIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";

export const TaskItemOptionsMenu = ({ isMoreOptions, setIsMoreOptions }) => {
  const moreOptionsRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        moreOptionsRef.current &&
        !moreOptionsRef.current.contains(e.target)
      ) {
        setIsMoreOptions(false);
      }
    }
    if (isMoreOptions) {
      document.addEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isMoreOptions]);

  return (
    <div
      ref={moreOptionsRef}
      className="bg-white shadow-[0_0_8px_#0000001f] rounded-[10px] py-[6px] max-w-[300px] w-full absolute z-10 top-[37px] right-[-47px]"
    >
      {/* Edit button */}
      <div className="px-[6px]">
        <button className="w-full flex items-center justify-between px-[6px] min-h-9 hover:bg-[#eee] hover:rounded-[5px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <PencilIcon className="size-6 text-[#666]" />
            <span className="text-[#202020]">Edit</span>
          </div>
          <kbd className="px-[5px] mx-[1px] text-[#666] font-normal">
            Ctrl E
          </kbd>
        </button>
      </div>
      <hr className="my-[6px]" />

      {/* Date and Priority */}
      <div>
        <div className="flex flex-col px-[6px] mx-[6px] min-h-9">
          <div className="flex justify-between items-center">
            <span className="text-[#202020] font-semibold">Date</span>
            <kbd className="text-[#666] font-normal">T</kbd>
          </div>
          <div className="min-h flex gap-3 items-center min-h-11">
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <CalendarDateRangeIcon className="size-7 text-[#4b9244]" />
            </button>
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <CalendarIcon className="size-7 text-[#246fe0] hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center" />
            </button>
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <SunIcon className="size-7 text-[#ad6200] hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center" />
            </button>
            <button>
              <NoSymbolIcon className="size-7 text-[#666] hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center" />
            </button>
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <EllipsisHorizontalIcon className="size-7 text-[#666] hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center" />
            </button>
          </div>
        </div>

        {/* Priority*/}
        <div className="flex flex-col justify-between item-center px-[6px] mx-[6px]">
          <div className="flex justify-between item-center">
            <span className="text-[#202020]  font-semibold">Priority</span>
            <kbd className="text-[#666] font-normal">Y</kbd>
          </div>
          <div className="flex items-center gap-3 min-h-11">
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <FlagSolidIcon className="size-7 text-[#d1453b] hover:bg-[#eee] hover:rounded-[5px]" />
            </button>
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <FlagSolidIcon className="size-7 text-[#eb8909] hover:bg-[#eee] hover:rounded-[5px]" />
            </button>
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <FlagSolidIcon className="size-7 text-[#246fe0] hover:bg-[#eee] hover:rounded-[5px]" />
            </button>
            <button className="size-10 hover:bg-[#eee] hover:rounded-[5px] flex justify-center items-center">
              <FlagIcon className="size-7 text-[#666]" />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-[6px]" />

      {/* Deadline and reminders */}
      <div className="px-[6px]">
        <button className="w-full flex justify-between item-center px-[6px] min-h-9 hover:bg-[#eee] hover:rounded-[5px]">
          <div className="flex items-center gap-3">
            <StarIcon className="size-6 text-[#f48318]" />
            <span className="text-[#202020]">Deadline</span>
          </div>
          <kbd className="text-[#666] font-normal">D</kbd>
        </button>

        <button className="w-full flex justify-between item-center px-[6px] min-h-9 hover:bg-[#eee] hover:rounded-[5px]">
          <div className="flex items-center gap-3">
            <ClockIcon className="size-6 text-[#666]" />
            <span className="text-[#202020]">Reminders</span>
          </div>
        </button>
      </div>
      <hr className="my-[6px]" />

      {/* Duplicate and copy link to task */}
      <div className="px-[6px] ">
        <button className="w-full flex justify-between item-center px-[6px] min-h-9 hover:bg-[#eee] hover:rounded-[5px]">
          <div className="flex items-center gap-3">
            <DocumentDuplicateIcon className="size-6 text-[#666]" />
            <span className="text-[#202020]">Duplicate</span>
          </div>
        </button>

        <button className="w-full flex justify-between items-center px-[6px] min-h-9 hover:bg-[#eee] hover:rounded-[5px]">
          <div className="flex items-center gap-3">
            <LinkIcon className="size-6 text-[#666]" />
            <span className="text-[#202020]">Copy link to task</span>
          </div>
          <kbd className="text-[#666] font-normal">Ctrl C</kbd>
        </button>
      </div>
      <hr className="my-[6px]" />

      {/* Dlete */}
      <div className="w-full flex justify-between items-center px-[6px] min-h-9">
        <button
          onClick={() => setIsMoreOptions(false)}
          className="w-full flex justify-between items-center px-[6px] hover:bg-[#eee] hover:rounded-[5px] min-h-9"
        >
          <div className="flex gap-3">
            <TrashIcon className="size-6 text-[#dc4c3e]" />
            <span className="text-[#dc4c3e] font-normal">Delete</span>
          </div>
          <kbd className="text-[#666] font-normal">Delete</kbd>
        </button>
      </div>
    </div>
  );
};
