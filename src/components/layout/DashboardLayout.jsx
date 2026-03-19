import React from "react";
import SideBar from "./SideBar";
import ContentArea from "./ContentArea";

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout bg-[#FAFAFA]">
      <div className="grid grid-cols-[minmax(200px,252px)_minmax(900px,1fr)] items-center h-full">
        <SideBar />
        <ContentArea />
      </div>
    </div>
  );
};

export default DashboardLayout;
