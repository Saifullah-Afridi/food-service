import { Navbar } from "flowbite-react";
import React from "react";
import {
  HiOutlineExclamationCircle,
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <>
      <div className="bg-[#FFCB04] py-1">
        <Navbar className="w-[95%] bg-[#FFCB04]  mx-auto">
          <Navbar.Brand as="div">
            <Link to="/" className="flex items-center ">
              <img
                src={logo}
                alt="app logo"
                className="object-fill h-10 w-auto"
              />
              <h4 className="text-2xl font-bold text-gray-600 ml-2">
                Bite Base
              </h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Link as="div">
              <Link
                to="/"
                className="flex items-center text-lg text-gray-600 gap-1"
              >
                <HiOutlineHome className=" text-[#E13D01] text-lg" />
                <span>Home</span>
              </Link>
            </Navbar.Link>
            <Navbar.Link as="div">
              <Link
                to="/about"
                className="flex items-center text-lg text-gray-600 gap-1"
              >
                <HiOutlineExclamationCircle className=" text-[#E13D01]  text-lg" />
                <span>About Us</span>
              </Link>
            </Navbar.Link>
            <Navbar.Link as="div">
              <Link
                to="/contact-us"
                className="flex items-center text-gray-600 text-lg gap-1"
              >
                <HiOutlinePhone className=" text-[#E13D01] text-lg" />
                <span>Contact Us</span>
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                className="w-full pl-3 pr-10 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search Food..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <HiOutlineShoppingBag className="text-2xl text-[#E13D01]  " />
          </div>

          <Navbar.Toggle />
        </Navbar>
        <Outlet />
      </div>
    </>
  );
};

export default NavigationBar;
