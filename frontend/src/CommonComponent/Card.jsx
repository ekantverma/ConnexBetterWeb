import React from "react";
import { Button } from "../CommonComponent/Button";
import Lottie from "lottie-react";

export const Card = React.memo(({ ele }) => {
  const {
    mainImg,
    img,
    isImageOrLottie,
    title,
    content,
    showbtton,
    bttonlink,
    btnstyle,
  } = ele;

  return (
    <div className="card w-full max-w-md mx-auto flex items-center flex-col gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-300 hover:shadow-2xl hover:border-gray-400 transition-all duration-300">
      {/* Main Image with Background Styling */}
      {mainImg && (
        <div
          className="flex flex-col items-center justify-center p-4 rounded-[142px]"
          style={{
            width: "236px",
            height: "288px",
            aspectRatio: "59 / 72",
            backgroundImage: `url(${mainImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Title and Icon */}
      <div className="flex items-center gap-4 justify-center">
        {img &&
          (isImageOrLottie ? (
            <Lottie animationData={img} className="h-12 w-12" />
          ) : (
            <img
              src={img}
              alt="logo"
              className="h-12 w-12 object-contain"
              loading="lazy"
            />
          ))}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Content */}
      <p className="text-center text-gray-600 text-lg leading-relaxed font-semibold">
        {content}
      </p>

      {/* Full Width Button */}
      {showbtton && (
        <div className="mt-4 w-full">
          <a href={bttonlink} className="w-full">
            <button className="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#5956D6] text-white text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
              Explore More
            </button>
          </a>
        </div>
      )}
    </div>
  );
});
