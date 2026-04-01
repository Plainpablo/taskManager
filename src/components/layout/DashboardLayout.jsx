import React, { useEffect, useState } from "react";
import SideBar from "../Menu/SideBar";
import ContentArea from "./ContentArea";
import AddTaskPopUp from "../AddTask/Modals/AddTaskPopUp";
import { useModal } from "../../context/PopUpModalContext";
import Search from "../Search/Search";
import useSideBarMenu from "../../context/SideBarMenuContext";

const DashboardLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const {sideBarOpen, setSideBarOpen, hideOpenIcon, setHideOpenIcon} = useSideBarMenu();


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

  return (
    <div className="dashboardLayout bg-[#FAFAFA]">
      {/* Pop ups */}
      <AddTaskPopUp />
      <Search />
      <div
        className={`grid ${sideBarOpen ? "grid-cols-[256px_1fr]" : "grid-cols-[0_1fr]"} h-full`}
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
