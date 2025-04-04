import React from "react";
import Lottie from "lottie-react";

const ContentImageBlock = React.memo(
  ({ subheading, heading, secheading, content, lottie, img, btnText, btnLink }) => {
    return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

          {/* Text Section */}
          <div className="md:w-1/2 space-y-3">
            {subheading && (
              <h4 className="text-blue-600 font-semibold text-lg uppercase">{subheading}</h4>
            )}
            {heading && (
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">{heading}</h2>
            )}
            {secheading && (
              <h5 className="text-gray-500 font-medium text-lg">{secheading}</h5>
            )}
            {content && (
              <p className="text-gray-700 text-xl leading-relaxed">{content}</p>
            )}

            {btnText && btnLink && (
              <a
                href={btnLink}
                className="inline-block mt-2 px-6 py-4 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition text-2xl"
              >
                {btnText}
              </a>
            )}
          </div>

          {/* Image / Lottie Section */}
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
