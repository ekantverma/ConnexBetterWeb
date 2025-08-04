import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, memo } from "react";
import React from "react";

export const Accordian = memo(({ val }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div
      className="transition-all duration-300 border-b border-gray-200"
    >
      {/* Question */}
      <button
        onClick={toggle}
        className="text-3xl w-full flex items-center justify-between py-5 px-4 text-left text-black hover:text-primary font-medium text-lg focus:outline-none"
      >
        <span>{val.que}</span>
        <span className="text-xl text-gray-500">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`px-4 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
          open ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {val.ans}
      </div>
    </div>
  );
});
