// LottieAnimation.js
import React from "react";
import Lottie from "lottie-react";

const LottieAnimation = ({ animationData }) => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default LottieAnimation;
