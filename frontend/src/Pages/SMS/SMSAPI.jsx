import React, { Suspense, lazy } from "react";
import ContentImageBlock from "../../CommonComponent/ContentImageBlock";
import Boxcontainer from "../../CommonComponent/Boxconatainer";
import LeftRightBLock from "../../CommonComponent/LeftRightBLock";
import LeftImageRightContent from "../../CommonComponent/Leftimagerightcontent";
import { CommonHeading } from "../../CommonComponent/CommonHeading";
import Scrollcomponent from "../../CommonComponent/Scrollcomponent";
import Brandsection from "../../CommonComponent/Brandsection";
import { Accordian } from "../../CommonComponent/Accordian";
import FAQ from "../../CommonComponent/FAQ";
import {
  SMSAPIBox,
  SMSAPIleftrightcontent,
  SMSAPIScroll,
  SMSAPIFAQ,
  SMSAPIDLT,
} from "../../Constant/SMSdata";
import { chooseConnex } from "../../Constant/SMSdata";
import sms_hero from "../../assets/SMSImage/Lottie/sms_hero.json";
import priceboximg from "../../assets/SMSImage/Lottie/SMS (1).json";
import { Button } from "../../CommonComponent/Button";
import { Brandimage2 } from "../../Constant/Homedata";
import heroimage from "../../assets/HomeImage/IMAGE/Hero.png";
import metalogo from "../../assets/HomeImage/IMAGE/metalogo.png";
import truecallerlogo from "../../assets/HomeImage/IMAGE/truecallerlogo.png";
import APIHeroSection from "../../Component/APIHeroSection";

const TextCardContainer = lazy(() =>
  import("../../CommonComponent/TextCardContainer")
);

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

const SMSAPI = () => {
  return (
    <section className="space-y-14 px-4">
      {/* ✅ Hero Section */}
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
          "Fully DLT-Approved Routes",
        ]}
        infoBoxes={[
          { title: "7 Days Free Trial", subtitle: "No payment required" },
          {
            title: (
              <span>
                An IIM- <br /> Alumni
              </span>
            ),
            subtitle: "Founded Company",
          },
          { icon: metalogo, title: "Meta" },
          { icon: truecallerlogo, title: "Truecaller" },
        ]}
      />

      {/* ✅ Why Choose Us */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold bg-clip-text text-black bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
            Why Do Businesses Choose Connex Better?
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 mt-4 max-w-6xl mx-auto animate-fade-in-up">
            Driving customer engagement with secure, reliable, and scalable
            messaging solutions.
          </p>
        </div>
        <div>
          <LazyComponent
            Component={TextCardContainer}
            props={{
              carddata: chooseConnex,
            }}
          />
        </div>
      </div>

      {/* ✅ Box Container */}
      <div className="container py-12">
        <Boxcontainer
          heading="A comprehensive global SMS provider that handles everything."
          para="Our A2P SMS service supports diverse use cases, delivering top-notch delivery rates. It includes advanced fraud protection, personalization options, and more."
          carddata={SMSAPIBox}
        />
      </div>

      <ContentImageBlock
        subheading="Affordable SMS API Pricing in India"
        heading="Pay only for the SMS you send. No hidden charges. Plans starting at just ₹0.11 per SMS."
        lottie="use"
        img={priceboximg}
        buttons={[
          { label: "Talk to Sales", link: "/Contact",},
          { label: "Contact Us", link: "/Contact",},
        ]}
      />

      {/* ✅ Left Right Block */}
      <div className="container py-12">
        <LeftRightBLock data={SMSAPIleftrightcontent} />
      </div>

      {/* ✅ Scroll Component */}
      <div className="container grid md:grid-cols-2 items-center gap-8 py-12">
        <CommonHeading
          h="How to choose an SMS provider"
          p="Here are the key factors you should consider when choosing an SMS provider."
        />
        <Scrollcomponent data={SMSAPIScroll} />
      </div>

      {/* ✅ Left Image Right Content */}
      <div className="container py-12">
        <LeftImageRightContent
          heading="Be up and running in no time"
          para="Build the experiences your customers want with our flexible API stack. Integrate their favorite channels with your business workflow to elevate their customer journey."
        />
      </div>

      {/* ✅ Brand Section */}
      <div className="container grid md:grid-cols-2 items-center gap-8 py-12">
        <CommonHeading
          h="Easily integrate SMS with your existing tech stack"
          p="We want to keep your operations running smoothly. That’s why our platform is easy to work with. Choose from a wide range of integrations to build and add on top of our SMS API, and easily configure them with your existing systems."
        />
        <Brandsection data={Brandimage2} />
      </div>

      {/* ✅ Accordian + DLT Section */}
      <div className="container grid md:grid-cols-2 items-start gap-8 py-12">
        <div className="space-y-4">
          {SMSAPIDLT.map((ele, ind) => (
            <Accordian val={ele} key={ind} />
          ))}
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col gap-4">
          <div className="border-b-2 border-blue-400 pb-2">
            <h1 className="text-blue-600 text-2xl font-bold">
              DLT Registration
            </h1>
          </div>
          <p className="text-gray-700 mt-4">
            Do you have any additional questions you would like to ask?
          </p>
          <Button name="Contact Now" link="/Contact" />
        </div>
      </div>

      {/* ✅ FAQ Section */}
      <div className="container py-12">
        <FAQ data={SMSAPIFAQ} />
      </div>
    </section>
  );
};

export default SMSAPI;

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
