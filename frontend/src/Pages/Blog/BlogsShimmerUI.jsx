import React from "react";

const ShimmerCard = () => (
  <div className="bg-white rounded-3xl shadow-lg p-4 animate-pulse flex flex-col h-[375px]]">
    {/* Image shimmer */}
    <div className="w-full h-64 bg-gray-300 rounded-t-2xl mb-4"></div>

    {/* Title shimmer */}
    <div className="h-5 w-3/4 bg-gray-300 rounded mb-2"></div>

    {/* Date shimmer */}
    <div className="h-4 w-1/2 bg-gray-200 rounded mb-1"></div>

    {/* Category shimmer */}
    <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>

    {/* Read More button shimmer */}
    <div className="mt-auto h-5 w-24 bg-gray-300 rounded"></div>
  </div>
);

const BlogsShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ShimmerCard key={item} />
      ))}
    </div>
  );
};

export default BlogsShimmerUI;