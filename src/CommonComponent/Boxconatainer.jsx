import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Card } from "./Card";
import { memo } from "react";

const Boxcontainer = memo(({ heading, para, carddata }) => {
  return (
    <div className="flex flex-col items-center px-6 md:px-12 lg:px-20 xl:px-24 space-y-10">
      {/* Heading Section */}
      <div className="text-center max-w-2xl">
        <CommonHeading h={heading} p={para} />
      </div>

      {/* Card Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {carddata.map((ele) => (
          <Card key={ele.id} ele={ele} />
        ))}
      </div>
    </div>
  );
});

export default Boxcontainer;
