import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  RectangleStackIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  PlusIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { usePage } from "../../context/PageContext";


const SideBarMenu = ({ setSideBarOpen, setHideOpenIcon, isMobile }) => {
  var popupMenuPages = [
    { page: "AddTask", icon: PlusIcon },
    { page: "Search", icon: MagnifyingGlassIcon },
  ];
  var menuPages = [
    { page: "Today", icon: CalendarDaysIcon },
    { page: "Overview", icon: CalendarIcon },
    { page: "Task", icon: RectangleStackIcon },
    { page: "Messages", icon: ChatBubbleLeftEllipsisIcon },
    { page: "Settings", icon: Cog6ToothIcon },
  ];

  const { setCurrentPage } = usePage();

  // Render page content on click
  function renderPage(page, index) {
    setCurrentPage(page);
    setActivePage(index);

    // Close side bar
    isMobile ? handleSidebar() : "";
  }

  // Handle add task and search pop menus
  function handlePopupMenu() {}

  // Set active page bg color
  const [active, setActive] = useState(0);
  function setActivePage(index) {
    setActive(index);
  }

  // Toggle side bar
  function handleSidebar() {
    setHideOpenIcon(true);
    setSideBarOpen(false);
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="left flex justify-end" onClick={handleSidebar}>
        <button>
          <ChevronLeftIcon className="size-6" />
        </button>
      </div>

      {popupMenuPages.map((page, index) => (
        <button
          key={index}
          onClick={handlePopupMenu}
          className="flex items-center gap-3 hover:bg-[#F5F5F7] hover:rounded-xl px-5 h-12 rounded-xl"
        >
          <page.icon className="size-6" />
          <h1>{page.page === "AddTask" ? "Add Task" : page.page}</h1>
        </button>
      ))}

      {menuPages.map((page, index) => (
        <button
          key={index}
          onClick={() => renderPage(page.page, index)}
          className={`flex items-center gap-3 hover:bg-[#F5F5F7] hover:rounded-xl px-5 h-12 rounded-xl ${index === active ? "bg-[#F5F5F7]" : ""}`}
        >
          <page.icon className="size-6" />
          <h1>{page.page === "AddTask" ? "Add Task" : page.page}</h1>
        </button>
      ))}
    </div>
  );
};

export default SideBarMenu;
