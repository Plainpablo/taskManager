import React from "react";
import SideBarMenu from "../ui/SideBarMenu";
import HelpCenter from "../ui/HelpCenter";


const SideBar = () => {
  return (
    <div className="sideBar flex flex-col items-start justify-between p-8 lg:p-5 h-full bg-white">
      <div className="flex flex-col gap-16 w-full items-start">
        {/* <h1 className="px-5">Task Manager</h1> */}
        <SideBarMenu />
      </div>

      {/* <div>
        <HelpCenter /> 
      </div> */}
    </div>
  );
};

export default SideBar;
