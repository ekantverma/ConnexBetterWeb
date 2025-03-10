import React from "react";
import { Button } from "../CommonComponent/Button";
import Lottie from "lottie-react";
export const Card = React.memo(({ ele }) => {
  const { img, title, content, showbtton,bttonlink, isImageOrLottie,btnstyle } = ele;
return (
  <div className="card flex flex-col gap-5 p-7 rounded-lg bg-secondary border border-secondary hover:border-gray-500 transition-colors duration-300 ease-in-out">

      <div className="card-img">
        {isImageOrLottie ? (
          <Lottie animationData={img} className="h-20 w-20" />
        ) : (
          <img src={img} alt="icons" height={10} width={48} loading="lazy" />
        )}
      </div>
      <div className="card-content flex flex-col gap-2">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-paracolor">{content}</p>
        {showbtton && <Button name="Explore More" link={bttonlink} btnstyle="change"/>}
      </div>
    </div>
  );
});

