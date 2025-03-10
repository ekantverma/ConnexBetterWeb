import React from "react";
import SidebarItem from "./SidebarItem";
import { menuItemsData } from "../Constant/menuItemsData";

const Sidebar = ({ onButtonClick }) => {
  return (
    <div className="w-full text-2xl">
      {menuItemsData.map((ele, index) => (
        <SidebarItem key={index} ele={ele} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
};

export default Sidebar;
