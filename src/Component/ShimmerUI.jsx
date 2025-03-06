import React from 'react';

const ShimmerUI = () => {
  return (
    <div className="p-5 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Left Side */}
        <div className="space-y-3">
          <div className="bg-slate-300 w-full h-96 rounded-md animate-pulse"></div>
          <div className="bg-slate-300 w-3/4 h-6 rounded-md animate-pulse"></div>
          <div className="bg-slate-300 w-1/2 h-6 rounded-md animate-pulse"></div>
        </div>

        {/* Right Side */}
        <div className="space-y-3">
          <div className="bg-slate-300 w-full h-96 rounded-md animate-pulse"></div>
          <div className="bg-slate-300 w-3/4 h-6 rounded-md animate-pulse"></div>
          <div className="bg-slate-300 w-1/2 h-6 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;