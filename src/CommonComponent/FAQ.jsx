import { Accordian } from "./Accordian";
import { Button } from "./Button";
import { CommonHeading } from "./CommonHeading";
import { memo } from "react";

export const FAQ = memo(({ data }) => {
  return (
    <div className="container mx-auto py-16 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-start bg-gray-50 rounded-2xl shadow-lg p-8">
        {/* Left Section - Heading & CTA */}
        <div>
          <CommonHeading
            h="FAQ"
            p="Find quick answers to your questions about our API services, integration, and support."
          />
          <div className="mt-6 space-y-4">
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
