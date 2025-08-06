import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, memo } from "react";
import React from "react";

export const Accordian = memo(({ val }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="transition-all duration-300 border-b border-gray-200">
      {/* Question */}
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 px-4 text-left focus:outline-none font-afacad font-medium leading-[28px] text-black hover:text-primary"
      >
        <span className="text-xl ">{val.que}</span>
        <span className="text-2xl text-gray font-medium">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`px-4 text-[rgba(17,17,17,0.54)] font-afacad text-[15px] font-medium transition-all duration-300 ease-in-out ${
          open ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {val.ans}
      </div>
    </div>
  );
});
