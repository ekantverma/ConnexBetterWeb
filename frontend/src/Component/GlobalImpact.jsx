import { lazy, Suspense } from "react";
const ShimmerUI = lazy(() => import("../Component/ShimmerUI"));
import { globalImpact } from "../Constant/Homedata";
const BrandSection = lazy(() => import("../CommonComponent/Brandsection"));

const DeveloperApis = () => {
  const LazyComponent = ({ Component, props = {} }) => (
    <Suspense fallback={<ShimmerUI />}>
      <Component {...props} />
    </Suspense>
  );

  return (
    <div className="container bg-white">
      <div className="max-w-8xl mx-auto text-center py-10">
        {/* Title */}
        <h2 className="
          text-[#0052CC] 
          text-2xl sm:text-3xl lg:text-[48px] 
          font-bold 
          leading-snug sm:leading-[48px] lg:leading-[57.6px] 
          font-[Afacad] 
          mb-6 sm:mb-10
        ">
          Global Impact, Seamless Delivery
        </h2>

        {/* Brand Section */}
        <div className="px-16">
          <LazyComponent Component={BrandSection} props={{ data: globalImpact }} />
        </div>
      </div>
    </div>
  );
};

export default DeveloperApis;
