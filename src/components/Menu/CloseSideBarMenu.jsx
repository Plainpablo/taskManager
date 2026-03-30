import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import useSideBarMenu from "../../context/SideBarMenuContext";

const CloseSideBarMenu = () => {
    const {setSideBarOpen, hideOpenIcon, setHideOpenIcon} = useSideBarMenu();

    function handleSideBartoggle() {
    setHideOpenIcon(false);
    setSideBarOpen(true);
  }

  return (
    <div
      className={`mb-3 mx-3 p-3  ${hideOpenIcon ? "flex" : "hidden"}`}
      onClick={handleSideBartoggle}
    >
      <button>
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
};

export default CloseSideBarMenu;
