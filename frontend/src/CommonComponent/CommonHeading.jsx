export const CommonHeading = ({ h, p, width = "half", align = "center" }) => {
  return (
    <div className={`flex flex-col gap-4 pb-2 text-${align} items-${align}`}>
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0052CC] leading-tight sm:pb-0 sm:gap-0">
        {h}
      </h2>

      {/* Subtext with Dynamic Width */}
      <p
        className={`text-lg md:text-xl text-gray-600 ${
          width === "full" ? "w-full" : "w-2/3 md:w-1/2"
        } mx-auto font-semibold`}
      >
        {p}
      </p>
    </div>
  );
};

export default CommonHeading;
