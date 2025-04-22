import React, { useState } from "react";

const DocsAPI = ({ title, apiCode, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

      {/* Description */}
      {description && (
        <div className="text-gray-700 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
          <p className="text-lg">{description}</p>
        </div>
      )}

      {/* Code Block Container */}
      <div className="bg-gray-900 text-white rounded-lg shadow-md">
        {/* Header with Red, Yellow, Green Dots */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-t-lg">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Code Block with Copy Button */}
        <div className="relative p-4 font-mono text-sm">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-gray-700 text-white px-3 py-1 text-sm rounded-md hover:bg-gray-600 transition-all ease-in-out"
          >
            {copied ? "✔ Copied!" : "📋 Copy"}
          </button>

          {/* Code Display */}
          <pre className="bg-gray-800 text-green-400 p-4 rounded-md whitespace-pre-wrap overflow-auto">
            {apiCode}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DocsAPI;
