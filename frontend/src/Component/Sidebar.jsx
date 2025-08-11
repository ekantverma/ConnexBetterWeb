import React from "react";
import SidebarItem from "./SidebarItem";
import { menuItemsData } from "../Constant/menuItemsData";

const Sidebar = ({ onButtonClick }) => {
  return (
    <nav
      className="w-full flex flex-col gap-2 text-xl font-medium overflow-y-auto"
      style={{ maxHeight: "100vh" }} // poori screen height tak scroll
    >
      {menuItemsData.map((ele, index) => (
        <div
          key={index}
          className="rounded-md px-4 transition-colors duration-300"
        >
          <SidebarItem ele={ele} onButtonClick={onButtonClick} />
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
