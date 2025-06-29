import { Accordian } from "./Accordian";
import { Button } from "./Button";
import { CommonHeading } from "./CommonHeading";
import { memo } from "react";

export const FAQ = memo(({ data }) => {
  return (
    <div className="w-full max-w-[94%] mx-auto py-20 px-4 sm:px-6 lg:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-start bg-gray-50 rounded-2xl shadow-xl p-10">
        {/* Left Section - Heading & CTA */}
        <div className="flex flex-col justify-center space-y-2">
          <CommonHeading
            h="FAQ"
            p="Find quick answers to your questions about our API services, integration, and support."
          />

          <div className="flex flex-col items-center text-center space-y-2">
            <p className="text-gray-800 font-medium text-lg">
              Any questions left unanswered?
            </p>
            <Button name="Contact us" link="/Contact" />
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="space-y-4">
          {data.map((val, id) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Accordian val={val} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default FAQ;
