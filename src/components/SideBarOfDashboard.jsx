import { Sidebar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SideBarOfDashboard = () => {
  return (
    <div className=" w-[100%] sticky top-0 bg-[#f8da61] h-screen overflow-auto">
      <Sidebar className="w-full">
        <Sidebar.Logo
          as="div"
          img={logo}
          imgAlt="app logo"
          className="bg-[#f8da61] h-16 mb-0 border-b-[1px] border-gray-500"
        >
          Bite Base
        </Sidebar.Logo>
        <Sidebar.Items className="bg-[#f8da61] h-[400px] w-[100%]">
          <Sidebar.ItemGroup>
            <Link to="resturants">
              <Sidebar.Item
                as="div"
                className="py-4 rounded-none border-b-[1px] border-gray-600 hover:bg-amber-400"
              >
                Restaurants
              </Sidebar.Item>
            </Link>
            <Link to="food/383838">
              <Sidebar.Item
                as="div"
                className="py-4 rounded-none border-b-[1px] border-gray-600 hover:bg-amber-400"
              >
                Fish
              </Sidebar.Item>
            </Link>
            <Link to="food/23423">
              <Sidebar.Item
                as="div"
                className="py-4 rounded-none border-b-[1px] border-gray-600 hover:bg-amber-400"
              >
                BBQ
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBarOfDashboard;
