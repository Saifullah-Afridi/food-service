import React from "react";
import HotelCard from "../components/HotelCard";
import HotelCards from "../components/HotelCards";
import Dashboard from "./Dashboard";
import Carousel from "../components/Carousel";
import { Outlet } from "react-router-dom";
import SideBarOfDashboard from "../components/SideBarOfDashboard";

const Home = () => {
  return (
    <div className="">
      <Carousel />
      <>
        <h2 className="text-3xl font-semibold text-gray-700 text-center mt-16 pb-10 ">
          Food Services - Hotels
        </h2>
        <div className="flex gap-2 w-[90%] mx-auto">
          <div className="w-[400px] ">
            <SideBarOfDashboard />
          </div>
          <div className="w-[1200px]">
            <Outlet />
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
