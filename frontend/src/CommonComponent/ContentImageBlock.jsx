import React from "react";
import Lottie from "lottie-react";

const ContentImageBlock = React.memo(
  ({
    subheading,
    heading,
    secheading,
    content,
    lottie,
    img,
    buttons = [], // ✅ array of { label, link, type }
  }) => {
    return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* ✅ Text Section */}
          <div className="md:w-3/6 space-y-5 text-center md:text-left">
            {subheading && (
              <h4 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
                {subheading}
              </h4>
            )}
            {heading && (
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                {heading}
              </h2>
            )}
            {secheading && (
              <h5 className="text-gray-600 font-medium text-lg">
                {secheading}
              </h5>
            )}
            {content && (
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {content}
              </p>
            )}

            {/* ✅ Buttons */}
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-6">
                {buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.link}
                    className={`inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-semibold shadow-sm transition-all duration-300
          ${
            btn.type === "primary"
              ? "bg-[#5956D6] text-white border border-[#5956D6] hover:bg-[#2A7CF5] hover:border-[#2A7CF5]"
              : "bg-white text-[#5956D6] border border-[#5956D6] hover:bg-[#5956D6] hover:text-white"
          }`}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* ✅ Image / Lottie Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            {lottie === "use" ? (
              <Lottie
                animationData={img}
                className="w-full max-w-[500px] h-auto"
              />
            ) : (
              <img
                src={img}
                alt="illustration"
                loading="lazy"
                className="w-full max-w-[500px] h-auto object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ContentImageBlock;
