import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { usePage } from "../../context/PageContext";

const SideBarMenu = () => {
  var menuPages = [
    { page: "Overview", icon: Squares2X2Icon },
    { page: "Task", icon: RectangleStackIcon },
    { page: "Messages", icon: ChatBubbleLeftEllipsisIcon },
    { page: "Settings", icon: Cog6ToothIcon },
  ];

  const { setCurrentPage } = usePage();

  //   Icon color when active = text-[#141522] else = #8E92BC

  // Render page content on click
  function renderPage(page, index) {
    setCurrentPage(page);
    setActivePage(index);
  }

  // Set active page bg color
  const [active, setActive] = useState(0);
  function setActivePage(index) {
    setActive(index);
  }
  return (
   
    <>
      {/*DESKTOP*/}
      <div className="hidden md:flex flex-col gap-6 w-full">
        {menuPages.map((page, index) => (
          <button
            key={index}
            onClick={() => renderPage(page.page, index)}
            className={`flex items-center gap-3 hover:bg-[#F5F5F7] hover:rounded-xl px-5 h-12 rounded-xl ${index === active ? "bg-[#F5F5F7]" : ""}`}
          >
            <page.icon className="size-6" />
            <h1>{page.page}</h1>
          </button>
        ))}
      </div>
      {/*TABLET*/}
      <div className="hidden sm:flex flex-col gap-6 md:hidden">
        {menuPages.map((page, index) => (
          <button
            key={index}
            onClick={() => renderPage(page.page, index)}
            className={`flex items-center hover:bg-[#F5F5F7] hover:rounded-full px-5 h-12 rounded-full ${index === active ? "bg-[#F5F5F7]" : ""}`}
          >
            <page.icon className="size-6" />
            {/* <h1>{page.page}</h1> */}
          </button>
        ))}
      </div>
    </>
  );
};

export default SideBarMenu;
