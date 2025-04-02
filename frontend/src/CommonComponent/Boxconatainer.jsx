import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Card } from "./Card";
import { memo } from "react";

const Boxcontainer = memo(({ heading, para, carddata }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 space-y-12 max-w-screen-xl mx-auto">
      {/* Heading Section */}
      <div className="text-center max-w-3xl">
        <CommonHeading h={heading} p={para} className="text-2xl font-semibold md:text-3xl lg:text-4xl text-gray-800" />
      </div>

      {/* Card Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {carddata.map((ele) => (
          <div key={ele.id} className="flex justify-center">
            <Card ele={ele} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Boxcontainer;