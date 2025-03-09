import React, { useState } from "react";
import logo from "/Logo.svg";
import { menuItemsData } from "../Constant/menuItemsData";
import MenuItems from "./MenuItems";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { Button } from "../CommonComponent/Button";

export default function Multilevelnav() {
  const [mobiletoggle, setmobiletoggle] = useState(false);
  const depthLevel = 0;

  const CloseNavbar = () => {
    setmobiletoggle(false);
  };

  return (
    <>
      <header className="text-lg pt-2 sticky top-0 z-50 h-20 bg-transparent backdrop-blur-lg transition-all duration-300 ease-in-out">
        <section className="flex items-center justify-between px-6 md:px-16 h-20 z-10 transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-lg shadow-sm">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div
              id="logo"
              className="flex items-center gap-3 transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="h-12 w-12 drop-shadow-lg rounded-full border border-gray-200"
              />
              <div className="text-2xl font-semibold md:text-xl text-gray-800 group-hover:text-gray-900 transition-all duration-300">
                Connex <span className="text-blue-600">Better</span>
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="main-nav hidden lg:flex">
            <ul className="menus flex gap-3 text-gray-800 text-sm font-medium">
              {menuItemsData.map((menu, index) => (
                <li key={index} className="relative group">
                  <MenuItems items={menu} depthLevel={depthLevel} />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary Navigation */}
          <div className="hidden lg:flex gap-5 items-center text-base">
            <Button name="Try for Free" link="/Contact" btnstyle="change" />
            <Button name="📞 +91-9220696606" link="tel:+919220696606" />
          </div>

          {/* Mobile Navigation Toggle */}
          <div
            className="cursor-pointer text-3xl lg:hidden p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-600 active:scale-90"
            onClick={() => setmobiletoggle((prev) => !prev)}
          >
            {mobiletoggle ? (
              <FaTimes className="transition-transform duration-300 rotate-180" />
            ) : (
              <FaBars className="transition-transform duration-300 rotate-0" />
            )}
          </div>
        </section>
      </header>

      {/* Mobile Navbar */}
      {mobiletoggle && (
        <div className="fixed flex flex-col gap-5 w-full h-full lg:hidden text-lg z-30 top-16 left-0 bg-white shadow-xl py-5 px-4">
          <Sidebar onButtonClick={CloseNavbar} />
          <div className="flex flex-col gap-4 text-xl">
            <div onClick={CloseNavbar}>
              <Button name="Try for Free" link="/Contact" btnstyle="change" />
            </div>
            <Button name="📞+91-9220696606" link="tel:+919220696606" />
          </div>
        </div>
      )}
    </>
  );
}
