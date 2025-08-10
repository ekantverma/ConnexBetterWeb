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
      <div className="w-full px-4 py-2 mb-2 rounded-lg transition-all duration-200 bg-white shadow-sm hover:shadow-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleSubmenu}
          aria-expanded={open}
          role="button"
        >
          <NavLink
            to={ele.link || "#"}
            className="text-base text-blue-600 font-semibold hover:text-blue-600 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {ele.title}
          </NavLink>
          <FaSortDown
            className={`text-gray-600 ml-2 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Submenu */}
        <div
          className={`ml-4 mt-2 border-l-[2px] border-gray-200 pl-3 overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
      <div className="w-full px-4 py-2 mb-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
        <NavLink
          to={ele.link}
          className="block text-base text-gray-800 font-medium hover:text-blue-600 transition duration-200"
          onClick={onButtonClick}
        >
          {ele.title}
        </NavLink>
      </div>
    );
  }
};

export default SidebarItem;
