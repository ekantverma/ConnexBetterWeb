import { Suspense, useState } from "react";
import heroimage from "../../assets/HomeImage/IMAGE/Hero.png";
import metalogo from "../../assets/HomeImage/IMAGE/metalogo.png";
import truecallerlogo from "../../assets/HomeImage/IMAGE/truecallerlogo.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import APIHeroSection from "../../Component/APIHeroSection";

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

const LazyImage = ({ src, alt, height, width, className }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    height={height}
    width={width}
    className={className}
  />
);

const SMSAPI = () => {
  return (
    // <section className="space-y-14 px-4">
    //   <div className="relative w-full h-full overflow-hidden flex items-start justify-center mb-16">
    //     {/* Hero Section */}
    //     <div className="relative grid gap-4 md:grid-cols-2 items-center">
    //       {/* Right Section (Image) - pehle dikhana hai mobile me */}
    //       <div className="relative flex justify-center animate-zoomIn mt-[10px] md:mt-[2px] order-1 md:order-2">
    //         <LazyImage
    //           src={heroimage}
    //           alt="Hero"
    //           height={363}
    //           width={545}
    //           className="max-w-full rounded-lg"
    //         />
    //       </div>

    //       {/* Left Section (Content) */}
    //       <div className="flex flex-col gap-4 md:gap-2 items-start justify-center animate-fadeIn px-4 md:mt-16 mt-10 sm:px-2 w-full order-2 md:order-1">
    //         <div className="w-full">
    //           <p className="text-3xl text-blue-600 mb-10">[SMS API]</p>
    //           <p className="text-[32px] sm:text-[40px] md:text-7xl font-semibold text-black animate-fadeIn leading-tight md:mb-4">
    //             Best <span className="text-blue-600">SMS API</span> Provider in
    //             India – Fast, Reliable & TRAI-Compliant
    //           </p>

    //           <h1 className="text-[16px] sm:text-[20px] md:text-[22px] text-gray-600 font-afacad font-normal leading-[24px] sm:leading-[28px] md:leading-[24px] tracking-[-0.26px] animate-slideInLeft mb-8 md:mb-6">
    //             Send OTPs, transactional alerts, and bulk SMS across India with
    //             Connex Better’s secure SMS API. <br />
    //             Fully compliant with TRAI & DLT regulations, and trusted by
    //             1000+ Indian businesses.
    //           </h1>
    //         </div>

    //         {/* Buttons */}
    //         <div className="flex gap-4 mt-2">
    //           {/* Desktop button */}
    //           <a
    //             href="/Contact"
    //             className="hidden sm:block text-white border border-[#5956D6] bg-[#5956D6] font-medium text-[14px] sm:text-[16px] px-6 sm:px-14 py-[8px] sm:py-[10px] rounded-[8px] hover:bg-[#2A7CF5] transition-all duration-300"
    //           >
    //             Start Free Trial
    //           </a>

    //           {/* Mobile button */}
    //           <a
    //             href="/Contact"
    //             className="block sm:hidden text-white border border-[#5956D6] bg-[#5956D6] font-medium text-[14px] sm:text-[16px] px-6 sm:px-14 py-[8px] sm:py-[10px] rounded-[8px] hover:bg-[#2A7CF5] transition-all duration-300 text-center"
    //           >
    //             Get Started
    //           </a>

    //           {/* View Pricing button */}
    //           <a href="/SMSpricing">
    //             <button className="text-[#5956D6] border border-[#5956D6] font-medium text-[14px] sm:text-[16px] px-6 sm:px-14 py-[8px] sm:py-[10px] rounded-[8px] hover:bg-[#5956D6] hover:text-white transition-all duration-300">
    //               View Pricing
    //             </button>
    //           </a>
    //         </div>

    //         {/* Trial Info */}
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[16px] text-gray-600 font-medium mt-4">
    //           <div className="flex items-center gap-4">
    //             <IoIosCheckmarkCircle className="text-blue-600 w-7 h-7" />
    //             500 Free SMS for Testing
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <IoIosCheckmarkCircle className="text-blue-600 w-7 h-7" />
    //             24/7 Local Support
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <IoIosCheckmarkCircle className="text-blue-600 w-7 h-7" />
    //             Fully DLT-Approved Routes
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <IoIosCheckmarkCircle className="text-blue-600 w-7 h-7" />
    //             Fully DLT-Approved Routes
    //           </div>
    //         </div>

    //         {/* Info Boxes */}
    //         <div className="flex justify-start gap-[5px] mt-10 flex-wrap">
    //           {/* Box 1 */}
    //           <div className="flex flex-col items-center gap-[4px] px-2 py-[10px] rounded-[8px] border border-[#D5D1D1] bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] w-[84px] h-[80px] md:w-[116px] md:h-[99px] justify-between text-center">
    //             <p className="text-[#1368C7] font-roboto text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[22.5px]">
    //               7 Days <br /> Free Trial
    //             </p>
    //             <p className="text-[9.3px] sm:text-[10px] md:text-[12px] text-black leading-tight whitespace-nowrap">
    //               No payment required
    //             </p>
    //           </div>

    //           {/* Box 2 */}
    //           <div className="flex flex-col items-center gap-[4px] px-2 py-[10px] rounded-[8px] border border-[#D5D1D1] bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] w-[82px] h-[80px] sm:w-[116px] sm:h-[99px] justify-between text-center">
    //             <p className="text-[#1368C7] font-roboto text-[14px] sm:text-[16px] font-semibold leading-[20px] sm:leading-[22.5px]">
    //               An IIM- <br /> Alumni
    //             </p>
    //             <p className="text-[9.3px] sm:text-[12px] md:text-[12px] text-black leading-tight whitespace-nowrap">
    //               Founded Company
    //             </p>
    //           </div>

    //           {/* Box 3 */}
    //           <div className="flex flex-col items-center justify-center gap-[4px] px-2 py-[12px] rounded-[8px] border border-[#D5D1D1] bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] w-[82px] h-[80px] sm:w-[116px] sm:h-[99px]">
    //             <img
    //               src={metalogo}
    //               alt="meta logo"
    //               className="w-30 h-25 sm:w-30 sm:h-25 rounded-md object-contain"
    //             />
    //           </div>

    //           {/* Box 4 */}
    //           <div className="flex flex-col items-center justify-center gap-[4px] px-2 py-[12px] rounded-[8px] border border-[#D5D1D1] bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] w-[82px] h-[80px] sm:w-[116px] sm:h-[99px]">
    //             <img
    //               src={truecallerlogo}
    //               alt="truecaller logo"
    //               className="w-30 h-25 sm:w-30 sm:h-25 rounded-md object-contain"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <APIHeroSection
      image={heroimage}
      subheading="[SMS API]"
      heading="Best SMS API Provider in India – Fast, Reliable & TRAI-Compliant"
      description="Send OTPs, transactional alerts, and bulk SMS across India with Connex Better’s secure SMS API. Fully compliant with TRAI & DLT regulations, and trusted by 1000+ Indian businesses."
      buttons={[
        { label: "Start Free Trial", link: "/Contact", type: "primary" },
        { label: "View Pricing", link: "/SMSpricing", type: "secondary" },
      ]}
      features={[
        "500 Free SMS for Testing",
        "24/7 Local Support",
        "Fully DLT-Approved Routes",
        "Fully DLT-Approved Routes"
      ]}
      infoBoxes={[
        { title: "7 Days Free Trial", subtitle: "No payment required" },
        {  title: <>An IIM- <br /> Alumni</>, subtitle: "Founded Company" },
        { icon: metalogo, title: "Meta" },
        { icon: truecallerlogo, title: "Truecaller" },
      ]}
    />
  );
};

export default SMSAPI;
