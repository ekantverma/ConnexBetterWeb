export const CommonHeading = ({ h, p, width = "half", align = "center" }) => {
  return (
    <div className={`flex flex-col gap-4 pb-8 text-${align} items-${align}`}>
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {h}
      </h2>

      {/* Subtext with Dynamic Width */}
      <p
        className={`text-lg md:text-xl text-gray-600 ${
          width === "full" ? "w-full" : "w-2/3 md:w-1/2"
        } mx-auto`}
      >
        {p}
      </p>
    </div>
  );
};

export default CommonHeading;
