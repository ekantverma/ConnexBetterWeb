import React from "react";

const CallforAction = () => {
  return (
    <div className="bg-gradient-to-r from-[#502CD0] to-[#2f0e96] py-20 px-4 sm:px-10 lg:px-20 text-center relative overflow-hidden w-full">
      {/* Top Shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E9F8F6] w-52 h-24 rounded-b-3xl z-0"></div>

      {/* Dots */}
      <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
        <div className="w-3 h-3 rounded-full bg-[#0052CC]"></div>
        <div className="w-3 h-3 rounded-full bg-[#0052CC] mt-[2px]"></div>
        <div className="w-3 h-3 rounded-full bg-[#0052CC] mt-[1px]"></div>
      </div>

      {/* Content */}
      <h2 className="text-[#FBFCFF] text-4xl sm:text-[40px] font-bold mb-4 z-10 relative leading-tight sm:leading-[50px] text-center font-[Afacad]">
        Ready to power your conversations with <br />
        Connex Better?
      </h2>

      <p className="text-white/80 text-base sm:text-lg mb-8 z-10 relative">
        Sign up today and create your perfect customer engagement experience.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap z-10 relative">
        <button className="bg-white text-[#3b0a84] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Start free trial
        </button>
        <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#3b0a84] transition">
          Talk To Experts
        </button>
      </div>

      {/* Decorative Lines (Optional) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 h-20 border rounded-xl border-white/10"></div>
      <div className="absolute right-0 top-1/3 transform translate-y-1/2 w-20 h-20 border rounded-xl border-white/10"></div>
    </div>
  );
};

export default CallforAction;
