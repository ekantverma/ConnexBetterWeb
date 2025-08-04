import React from "react";
import { NavLink } from "react-router-dom";

export const Button = React.memo((props) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink to={props.link} onClick={handleClick}>
      <button
        className={`h-[44px] px-6 rounded-[8px] text-lg font-medium ${
          props.btnstyle === "change"
            ? "border border-[#0052cc] text-[#0052cc] hover:bg-[#0052cc] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
            : "bg-[#5956D6] text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
        }`}
      >
        {props.name}
      </button>
    </NavLink>
  );
});
