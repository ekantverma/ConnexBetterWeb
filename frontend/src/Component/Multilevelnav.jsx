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
      <header className="text-lg sticky top-0 z-50 h-20 transition-all duration-300 ease-in-out border-b-[0.5px] border-solid border-[#E5E5E5]/10 bg-white shadow-[0_1px_5.7px_0_rgba(0,0,0,0.25)]">
        <section className="flex items-center justify-between md:px-16 h-20 z-10 transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-lg shadow-sm">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div
              id="logo"
              className="flex items-center transform transition-all duration-300 ease-in-out hover:scale-105 pl-2"
            >
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="h-10 w-10 drop-shadow-lg rounded-full border border-gray-200"
              />
              <div className="text-2xl font-semibold md:text-2xl md:ml-1 text-gray-800 group-hover:text-gray-900 transition-all duration-300">
                Connex Better
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="main-nav hidden lg:flex">
            <ul className="menus flex gap-8 text-gray-800 text-sm font-semibold">
              {menuItemsData.map((menu, index) => (
                <li key={index} className="relative group">
                  <MenuItems items={menu} depthLevel={depthLevel} />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary Navigation */}
          <div className="hidden lg:flex gap-4 items-center text-base">
            <a
              href="/Contact"
              className="bg-primary text-white bg-[#5956D6] text-lg font-semibold px-6 py-3 rounded-[8px] shadow-md transition-all duration- hover:bg-opacity-90"
            >
              Get 500 free SMS
            </a>
            <a
              href="tel:+919220696606"
              className="bg-primary text-white bg-[#5956D6] text-lg font-semibold px-6 py-3 rounded-[8px] shadow-md transition-all duration- hover:bg-opacity-90"
            >
              📞 +91 92206 96606
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div
            className={`
    flex items-center justify-center cursor-pointer text-2xl lg:hidden p-2 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-600 active:scale-95 backdrop-blur-sm`}
            onClick={() => setmobiletoggle((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="inline-block transition-transform duration-300">
              {mobiletoggle ? (
                <FaTimes className="transform scale-100 rotate-180 transition-all duration-300 ease-in-out" />
              ) : (
                <FaBars className="transform scale-100 rotate-0 transition-all duration-300 ease-in-out" />
              )}
            </span>
          </div>
        </section>
      </header>

      {/* ───────── Mobile View Navbar ───────── */}
      <div
        className={`
    fixed inset-0 z-[9999] lg:hidden overflow-hidden
    ${
      mobiletoggle
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
    transition-opacity duration-300
  `}
      >
        {/* Backdrop */}
        <div
          onClick={CloseNavbar}
          className={`
      absolute inset-0 bg-black/70 backdrop-blur-sm
      transition-opacity duration-300
      ${mobiletoggle ? "opacity-100" : "opacity-0"}
    `}
        />

        {/* Slide-in Panel */}
        <aside
          className={`
      absolute top-0 h-full w-[100%] max-w-full bg-white shadow-xl
      flex flex-col gap-6 p-6 mx-4
      transform transition-transform duration-500 ease-in-out
      ${mobiletoggle ? "translate-x-0" : "translate-x-full"}
    `}
        >
          {/* ✖ Close Button */}
          <button
            onClick={CloseNavbar}
            className="self-end text-3xl p-2 hover:bg-gray-100 active:scale-95 transition pr-4"
            aria-label="Close Navigation"
          >
            <FaTimes />
          </button>

          {/* Links */}
          <Sidebar onButtonClick={CloseNavbar} />

          {/* CTA Buttons
          <Button
            name="Get 5000 Free SMS"
            link="/Contact"
            btnstyle="change"
            className="w-full"
            onClick={CloseNavbar}
          />
          <Button
            name="📞 +91 92206 96606"
            link="tel:+919220696606"
            className="w-full"
          /> */}
        </aside>
      </div>
    </>
  );
}
