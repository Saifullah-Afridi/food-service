import React from "react";
import Carousel from "./Carousel";
import { Outlet } from "react-router-dom";

const MainSectionOfDashboard = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainSectionOfDashboard;
