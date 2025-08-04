import React from 'react';
import img1 from "../assets/HomeImage/IMAGE/impactImg-1.png"
import img2 from "../assets/HomeImage/IMAGE/impactImg-2.png"
import img3 from "../assets/HomeImage/IMAGE/impactImg-3.png"
import img4 from "../assets/HomeImage/IMAGE/impactImg-4.png"
import img5 from "../assets/HomeImage/IMAGE/impactImg-5.png"
import img6 from "../assets/HomeImage/IMAGE/impactImg-6.png"
import img7 from "../assets/HomeImage/IMAGE/impactImg-7.png"
import img8 from "../assets/HomeImage/IMAGE/impactImg-8.png"

const DeveloperApis = () => {
  const logos = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="bg-white py-14 px-4 sm:px-6 lg:px-12 mt-16 w-full">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-[#0052CC] text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[57.6px] font-[Afacad] mb-10">
          Global Impact, Seamless Delivery
        </h2>

        {/* Image Grid */}
        <div className="flex gap-7 justify-center items-center">
          {logos.map((src, index) => (
            <div
              key={index}
              className="w-[150px] h-[160px] flex items-center justify-center"
            >
              <img
                src={src}
                alt={`logo-${index + 1}`}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperApis;
