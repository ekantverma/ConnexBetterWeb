import React from "react";
import { Button } from "../CommonComponent/Button";
import Lottie from "lottie-react";

export const RevenueCard = React.memo(({ ele }) => {
  const {
    img,
    title,
    content,
    showbtton,
    bttonlink,
    isImageOrLottie,
    btnstyle,
  } = ele;

  return (
    <div
      className="flex flex-col w-[300px] p-8 rounded-[24px]
        bg-[#FFFFFE] border border-[#ABAAFA]
        shadow-[2px_2px_4px_rgba(0,0,0,0.25)]
        gap-6 transition-all duration-300 ease-in-out"
    >
      {/* Image / Lottie Animation */}
      <div className="flex justify-start">
        {isImageOrLottie ? (
          <Lottie animationData={img} className="h-24 w-24" />
        ) : (
          <img
            src={img}
            alt="icons"
            className="h-16 w-16 object-contain"
            loading="lazy"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start text-left gap-3">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{content}</p>

        {showbtton && (
          <Button
            name="Explore More"
            link={bttonlink}
            btnstyle={`${btnstyle} px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-full shadow-md hover:bg-blue-700 transition-all duration-300`}
          />
        )}
      </div>
    </div>
  );
});
