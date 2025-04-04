import React, { useState } from "react";
import { Button } from "./Button";

const LeftCodeRightContent = ({ heading, para }) => {
  const [copied, setCopied] = useState(false);

  const apiCode = `{
  "templatename": "enter template name",
  "country": "country code",
  "mobile": "95658XXXXX,95658XXXXX",
  "media": "https://waba.connexbetter.com/assets/sample.jpeg",
  "dvariables": ["var 1", "var 2"],
  "senton": "DD-MM-YYYY HH:SS"
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(apiCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl p-8 gap-8 my-10">
      {/* Left Side: Code Block */}
      <div className="w-full lg:w-1/2 bg-gray-900 text-white rounded-lg shadow-md">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-t-lg">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <div className="relative p-4 font-mono text-sm">
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-600"
          >
            {copied ? "✔ Copied" : "📋 Copy"}
          </button>

          <pre className="bg-gray-800 text-green-400 p-4 rounded-md whitespace-pre-wrap">
            {apiCode}
          </pre>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
          {heading}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {para}
        </p>
        <Button name="Get Started" link="/Contact" className="mt-4" />
      </div>
    </div>
  );
};

export default LeftCodeRightContent;
