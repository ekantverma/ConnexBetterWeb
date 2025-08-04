import { CommonHeading } from "../CommonComponent/CommonHeading";
import { TextCard } from "./TextCard";
import { memo } from "react";

const TextCardContainer = memo(({ heading, para, carddata }) => {
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

      {/* Fixed 3 Cards Per Line on Large Screens */}
      <div
        className={`
          grid gap-6 w-full justify-center
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        `}
      >
        {carddata.map((ele) => (
          <div key={ele.id} className="flex justify-center">
            <TextCard
              ele={ele}
              className="w-full max-w-xs sm:max-w-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default TextCardContainer;
