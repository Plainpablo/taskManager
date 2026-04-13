import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { ArrowFatUp } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { LayoutSettings } from "./Modals/LayoutSettings";

export const Display = () => {
  const [isDisplayHover, setIsDisplayHover] = useState(false);
  const [isDisplay, setIsDisplay] = useState(true);
  const displayRef = useRef(null);
  function handleDisplayHover() {
    setIsDisplayHover(true);
  }
  return (
    <button
      ref={displayRef}
      onMouseEnter={handleDisplayHover}
      onMouseLeave={() => setIsDisplayHover(false)}
      className="group flex gap-[6px] justify-center items-center px-3 hover:bg-[#0000000a] h-8 rounded-[5px] relative"
    >
      <RectangleStackIcon className="size-5 text-[#666]" />
      <span className="text-[#666] text-sm font-semibold group-hover:text-black">
        Display
      </span>

      {isDisplayHover && (
        <div className="bg-[#282828] rounded-[5px] w-max absolute top-8 right-0 px-2 py-1">
          <div className="flex flex-col p-2">
            <span className="font-bold text-sm text-white text-left  pb-2 border-b-[1px] border-[#3d3d3d]">
              List
            </span>
            <div className="flex pt-2 justify-center items-center">
              <span className="text-white">Change layout & view</span>
              <div className="ml-2 flex items-center gap-[2px]">
                <kbd className="bg-[#6666] text-white rounded-[5px] p-[2px]">
                  <ArrowFatUp size={12} color="#ffff" />
                </kbd>
                <kbd className="bg-[#6666] text-white flex justify-center items-center font-normal rounded-[5px] p-[2px] h-4 min-w-4 text-[13px]">
                  V
                </kbd>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Render layout settings */}
      {isDisplay && <LayoutSettings />}
    </button>
  );
};
