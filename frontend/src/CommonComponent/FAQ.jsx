import { Accordian } from "./Accordian";
import { Button } from "./Button";
import { memo } from "react";

export const FAQ = memo(({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Find quick answers to your questions about our API services, integration, and support.
          <br />
          <a
            href="/Contact"
            className="text-blue-600 font-semibold hover:underline text-2xl"
          >
            Contact Our Support Team
          </a>
        </p>
      </div>

      {/* Accordion Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 divide-y divide-gray-200">
        {data.map((val, idx) => (
          <Accordian key={idx} val={val} />
        ))}
      </div>
    </div>
  );
});

export default FAQ;
