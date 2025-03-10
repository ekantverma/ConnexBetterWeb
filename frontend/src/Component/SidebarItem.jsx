import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ ele, onButtonClick }) => {
  const [open, setOpen] = useState(false);

  const toggleSubmenu = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  if (ele.submenu) {
    return (
      <div className="w-full px-4 py-2 mb-5 cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-200">
        <div
          className="flex justify-between items-center"
          onClick={toggleSubmenu}
          aria-expanded={open}
          role="button"
        >
          <NavLink
            to={ele.link || "#"}
            className="text-black font-medium hover:text-blue-500 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {ele.title}
          </NavLink>
          <FaSortDown
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`pl-4 transition-all overflow-hidden ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >
          {ele.submenu.map((child, index) => (
            <SidebarItem
              key={index}
              ele={child}
              onButtonClick={onButtonClick}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full px-4 py-2 hover:bg-gray-200 rounded-lg transition-all duration-200 mb-5">
        <NavLink
          to={ele.link}
          className="text-black font-medium hover:text-blue-500 transition-all duration-200 block"
          onClick={onButtonClick}
        >
          {ele.title}
        </NavLink>
      </div>
    );
  }
};

export default SidebarItem;
