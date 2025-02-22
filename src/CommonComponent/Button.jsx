import React from "react";
import { NavLink } from "react-router-dom";
export const Button =React.memo((props) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
    <div>
    <button className={` px-3 py-3 rounded-lg text-xl ${props.btnstyle=="change"?" border border-[#0052cc] text-primery hover:bg-primery hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out":"bg-primery text-white shadow-lg"}`}>
        <NavLink to={props.link}  onClick={handleClick}>{props.name}</NavLink>
      </button>
    </div>
      
    </>
  );
});
