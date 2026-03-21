import React, { useState } from "react";
import Overview from "../Pages/Overview";
import Settings from "../Pages/Settings";
import Task from "../Pages/Task";
import Message from "../Pages/Message";
import { usePage } from "../../context/PageContext";
import Today from "../Pages/Today";

const pages = {
  Today: Today,
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
