import React from "react";
import { Outlet } from "react-router-dom";
import SideBarOfDashboard from "../components/SideBarOfDashboard";
import Carousel from "../components/Carousel";
import MainSectionOfDashboard from "../components/MainSectionOfDashboard";

const Dashboard = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-700 text-center mt-16 pb-10 ">
        Food Services - Hotels
      </h2>
      <div className="flex gap-2 w-[90%] mx-auto">
        <div className="w-[400px]  ">
          <SideBarOfDashboard />
        </div>
        <div className="w-[1200px]">
          <MainSectionOfDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
