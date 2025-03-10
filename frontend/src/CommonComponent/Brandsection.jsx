import React, { memo } from "react";
const BrandSection = memo(({data}) => {
  return (
    <div className="image-slider overflow-hidden relative">
      <div className="slider-track">
        {/* Render the images */}
        {data.map((logo, index) => (
          <div className="slide p-2 " key={`original-${index}`}>
            <img src={logo.logo} alt={`Brand ${index + 1}`} loading="lazy"  className="h-auto w-auto max-h-24 max-w-30"/>
          </div>
        ))}

        {/* Duplicate the images for seamless looping */}
        {data.map((logo, index) => (
          <div className="slide p-2 " key={`duplicate-${index}`}>
            <img src={logo.logo} alt={`Duplicate ${index + 1}`} loading="lazy"  className="h-auto w-auto max-h-24 max-w-30"/>
          </div>
        ))}
      </div>
    </div>
  );
});

export default BrandSection;
