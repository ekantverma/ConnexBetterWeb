import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Card } from "./Card";
import { memo } from "react";

const Boxcontainer = memo(({ heading, para, carddata }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-xl space-y-12">
      
      {/* Heading Section */}
      <div className="text-center max-w-3xl w-full">
        <CommonHeading
          h={heading}
          p={para}
          className="text-lg font-semibold md:text-2xl lg:text-xl text-gray-800"
        />
      </div>

      {/* Card Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-4">
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
