import { lazy, Suspense, memo } from "react";
const ShimmerUI = lazy(() => import("../Component/ShimmerUI"));
import { globalImpact } from "../Constant/Homedata";

const DeveloperApis = () => {
  const LazyComponent = ({ Component, props = {} }) => (
    <Suspense fallback={<ShimmerUI />}>
      <Component {...props} />
    </Suspense>
  );

  // BrandSection ab yahi define kiya gaya hai
  const BrandSection = memo(({ data }) => {
    return (
      <div className="image-slider overflow-hidden relative">
        <div className="slider-track flex items-center gap-10">
          {/* Render the images */}
          {data.map((logo, index) => (
            <div className="inline-flex" key={`original-${index}`}>
              <img
                src={logo.logo}
                alt={`Brand ${index + 1}`}
                loading="lazy"
                className="h-auto max-h-20 max-w-20 object-contain"
              />
            </div>
          ))}

          {/* Duplicate the images for seamless looping */}
          {data.map((logo, index) => (
            <div className="inline-flex" key={`duplicate-${index}`}>
              <img
                src={logo.logo}
                alt={`Duplicate ${index + 1}`}
                loading="lazy"
                className="h-auto max-h-20 max-w-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white">
      <div className="max-w-9xl mx-auto text-center py-10">
        {/* Title */}
        <h2
          className="
          text-[#0052CC] 
          text-2xl sm:text-3xl lg:text-[40px] 
          font-bold 
          leading-snug sm:leading-[48px] lg:leading-[57.6px] 
          font-[Afacad] 
          mb-6 sm:mb-10
        "
        >
          Global Impact, Seamless Delivery
        </h2>

        {/* Brand Section */}
        <div className="mx-16">
          <LazyComponent
            Component={BrandSection}
            props={{ data: globalImpact }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeveloperApis;
