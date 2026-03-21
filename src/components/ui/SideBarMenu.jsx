import React, { useEffect, useState } from "react";
import {
  RectangleStackIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { usePage } from "../../context/PageContext.jsx";
import { useModal } from "../../context/PopUpModalContext.jsx";

const SideBarMenu = ({ setSideBarOpen, setHideOpenIcon, isMobile }) => {
  const { isAddTaskOpen, setIsAddTaskOpen } = useModal();
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

  // Handle add task and search pop menus
  function handlePopupMenu(page) {
    console.log(page.page);

    if (page.page === "AddTask") {
      setIsAddTaskOpen(true);
    }
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
          className="flex items-center gap-3 hover:bg-[#F5F5F7] hover:rounded-xl px-5 h-12 rounded-xl"
          onClick={() => handlePopupMenu(page)}
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
