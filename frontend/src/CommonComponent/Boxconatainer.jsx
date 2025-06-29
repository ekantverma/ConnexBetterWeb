import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Card } from "./Card";
import { memo } from "react";

const Boxcontainer = memo(({ heading, para, carddata }) => {
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

      {/* Responsive Card Grid */}
      <div
        className={`grid gap-6 w-full justify-center
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-${carddata.length < 3 ? carddata.length : 3}
          xl:grid-cols-${carddata.length < 4 ? carddata.length : 4}
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
