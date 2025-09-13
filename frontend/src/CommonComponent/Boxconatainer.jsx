import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Card } from "./Card";
import { memo } from "react";

const Boxcontainer = memo(({ heading, para, carddata }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-xl space-y-10 mx-auto">
      
      {/* Heading Section */}
      <div className="text-center w-full max-w-5xl">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          {heading}
        </h2>
        <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
          {para}
        </p>
      </div>

      {/* Responsive Card Grid */}
      <div
        className={`grid gap-6 w-full justify-center
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        `}
      >
        {carddata.map((ele) => (
          <div key={ele.id} className="flex justify-center">
            <Card
              ele={ele}
              className="w-full max-w-xs sm:max-w-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Boxcontainer;
