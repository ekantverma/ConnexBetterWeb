import React from "react";
import Lottie from "lottie-react";

const ContentImageBlock = React.memo(({ lottie, img }) => {
  return (
    <div className="flex justify-center items-center md:px-6">
      {lottie === "use" ? (
        <Lottie animationData={img} className="w-full max-w-lg h-auto" />
      ) : (
        <img 
          src={img} 
          alt="illustration" 
          loading="lazy" 
          className="w-full max-w-lg h-auto rounded-xl"
        />
      )}
    </div>
  );
});

export default ContentImageBlock;
