import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Outlet } from "react-router-dom";
import SideBarOfDashboard from "../components/SideBarOfDashboard";

const Home = () => {
  return (
    <div className="">
      <Carousel />
      <>
        <h2 className="text-3xl font-semibold text-gray-700 text-center mt-16 pb-10 "></h2>
        <div className="w-[90%] flex flex-col md:flex-row mx-auto">
          <div className="min-w-[25%] ">
            <SideBarOfDashboard />
          </div>
          <div className="min-w-[75%] self-center">
            <Outlet />
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
