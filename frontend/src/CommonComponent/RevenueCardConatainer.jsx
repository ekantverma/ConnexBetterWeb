import { CommonHeading } from "../CommonComponent/CommonHeading";
import { RevenueCard } from "./RevenueCard";
import { memo } from "react";

const RevenueCardContainer = memo(({ heading, para, carddata }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-xl space-y-1 mx-auto">
      
      {/* Heading Section */}
      <div className="text-center max-w-3xl w-full">
        <CommonHeading
          h={heading}
          p={para}
          className="text-lg font-semibold md:text-2xl lg:text-xl text-gray-800"
        />
      </div>

      {/* Grid: 1-2-3-4 Columns */}
      <div
        className="grid gap-8 w-full
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4"
      >
        {carddata.map((ele) => (
          <div key={ele.id} className="flex justify-center">
            <RevenueCard ele={ele} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default RevenueCardContainer;
