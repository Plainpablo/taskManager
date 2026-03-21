import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import ContentArea from "./ContentArea";
import AddTask from "../AddTask/AddTask";
import { useModal } from "../../context/PopUpModalContext";

const DashboardLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [hideOpenIcon, setHideOpenIcon] = useState(true);
  const { setIsAddTaskOpen } = useModal();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 749px)");
    const handleChange = (e) => {
      if (e.matches) {
        setSideBarOpen(false);
        setHideOpenIcon(true);
        setIsMobile(true);
      } else {
        setSideBarOpen(true);
        setHideOpenIcon(false);
        setIsMobile(false);
      }
    };

    handleChange(media);

    media.addEventListener("change", handleChange);
    return () => window.removeEventListener("change", handleChange);
  }, []);

  // Handle add task and search pop menus
  function handlePopupMenu() {
    setIsAddTaskOpen(false);
  }

  return (
    <div className="dashboardLayout bg-[#FAFAFA]">
      <AddTask />

      <div
        className="grid grid-cols-[256px_1fr] h-full"
        // onClick={() => handlePopupMenu()}
      >
        <SideBar
          sideBarOpen={sideBarOpen}
          setSideBarOpen={setSideBarOpen}
          hideOpenIcon={hideOpenIcon}
          setHideOpenIcon={setHideOpenIcon}
          isMobile={isMobile}
        />

        <ContentArea sideBarOpen={sideBarOpen} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default DashboardLayout;
