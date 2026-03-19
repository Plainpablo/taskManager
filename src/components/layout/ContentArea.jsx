import React, { useState } from "react";
import Overview from "../pages/Overview";
import Settings from "../pages/Settings";
import Task from "../pages/Task";
import Message from "../pages/Message";
import { usePage } from "../../context/PageContext";

const pages = {
  Overview: Overview,
  Settings: Settings,
  Messages: Message,
  Task: Task,
};

const ContentArea = ({ isMobile, sideBarOpen }) => {
  const { currentPage } = usePage();
  const CurrentPage = pages[currentPage];

  return (
    <div className="w-full h-screen relative">
      <div
        className={`overlay bg-[#999] w-full h-screen absolute z-10 ${isMobile && sideBarOpen ? "flex" : "hidden"}`}
      ></div>
      {<CurrentPage />}
    </div>
  );
};

export default ContentArea;
