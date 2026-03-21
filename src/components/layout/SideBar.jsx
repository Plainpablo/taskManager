import React, { useEffect } from "react";
import SideBarMenu from "../ui/SideBarMenu";
import HelpCenter from "../ui/HelpCenter";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SideBar = ({
  sideBarOpen,
  setSideBarOpen,
  hideOpenIcon,
  setHideOpenIcon,
  isMobile,
}) => {

  function handleSideBartoggle() {
    setHideOpenIcon(false);
    setSideBarOpen(true);
  }
  
  return (
    <div className="flex flex-col">
      <div
        className={`mb-3 mx-3 p-3  ${hideOpenIcon ? "flex" : "hidden"}`}
        onClick={handleSideBartoggle}
      >
        <button>
          <ChevronRightIcon className="size-6" />
        </button>
      </div>

      <div
        className={`sideBar flex flex-col items-start justify-between p-3  h-full bg-white w-[256px] ${sideBarOpen ? "translate-x-0" : "translate-x-[-100%]"} `}
      >
        <div className="flex flex-col w-full items-start">
          <SideBarMenu
            setSideBarOpen={setSideBarOpen}
            setHideOpenIcon={setHideOpenIcon}
            isMobile={isMobile}
          />
        </div>

        {/* <div>
        <HelpCenter /> 
      </div> */}
      </div>
    </div>
  );
};

export default SideBar;
