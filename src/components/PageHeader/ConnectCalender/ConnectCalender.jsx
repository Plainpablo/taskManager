import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ConnectToCalenderImg from "../../../assets/images/connectToCalender.png";
import { Triangle } from "phosphor-react";
import { useState } from "react";

const ConnectCalender = () => {
  const [isConnectCalenderHover, setIsConnectCalenderHover] = useState(false);
  function handleConnectCalenderHover() {
    setIsConnectCalenderHover(true)
  }

  return (
    <button className="flex items-center h-8 border-[#e6e6e6] border-[1px] rounded-[5px]">
      <div 
      className="group flex justify-center items-center gap-[6px] hover:bg-[#0000000a] h-8 w-full pl-2 pr-[6px] relative"
      onMouseEnter={handleConnectCalenderHover}
      onMouseLeave={()=> setIsConnectCalenderHover(false)}
      >
        <CalendarIcon className="size-5 text-[#666] group-hover:text-black" />
        <span className="text-[#666] text-sm font-semibold group-hover:text-black">
          Connect calender
        </span>
        {/* Connect calender pop up */}
        { isConnectCalenderHover &&
          <div className="bg-[#282828] flex flex-col p-4 rounded-[10px] w-[250px] absolute z-50 top-12 left-[-30px]">
            <div className="relative">
              <div className="w-full flex justify-center items-center absolute top-[-24px] mx-auto">
                <Triangle size={12} weight="fill" color="#282828" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <CalendarIcon className="size-6 text-white" />
                <span className="text-white font-bold text-sm">
                  Connect your calendar
                </span>
              </div>
              <img src={ConnectToCalenderImg} alt="" />
              <div className="mt-3 text-left">
                <span className="text-[#b3b3b3] text-sm font-normal">
                  Connect Google or Outlook Calendar to show events in Today and
                  Upcoming.
                </span>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="group min-w-[32px] flex justify-center items-center border-l-[1px] h-8 hover:bg-[#0000000a]">
        <XMarkIcon className="size-[18px] text-[#666] group-hover:text-black" />
      </div>
    </button>
  );
};

export default ConnectCalender;
