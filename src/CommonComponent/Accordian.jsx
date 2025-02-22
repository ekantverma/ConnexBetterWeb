import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState,memo } from "react";
import React from "react";
export const Accordian=memo(({val})=>{
    
    const [hide,setHide]=useState(false)
    function handelArrowbtn()
    {
       setHide(!hide)
    }
   
    return(
        <div className="bg-tertiary rounded-lg mb-4 " onClick={()=>handelArrowbtn()}>
            <div className="text-lg cursor-pointer flex p-5 justify-between" >{val.que}<span >{hide?<IoIosArrowUp/>:<IoIosArrowDown />}</span></div>
            <div className={`${hide ? "max-h-full opacity-100 py-3" : "max-h-0 opacity-0"} px-4  text-gray-600  overflow-hidden transition-all duration-300  ease-in-out `}>{val.ans}</div>
        </div>)})


   