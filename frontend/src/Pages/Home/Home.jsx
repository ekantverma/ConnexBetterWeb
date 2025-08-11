import "./Home.css";
import { Suspense, lazy } from "react";
import {
  Brandimage,
  Brandimage2,
  offers,
  chooseConnex,
  Boostrevenue,
  Insights,
  homeFAQ,
} from "../../Constant/Homedata";
import heroimage from "../../assets/HomeImage/IMAGE/Hero.png";
// import ourfeature from "../../assets/HomeImage/Lottie/our feature.json";
import features from "../../assets/HomeImage/IMAGE/features.png";
import smscallimg from "../../assets/HomeImage/IMAGE/Start sms.webp";
import metalogo from "../../assets/HomeImage/IMAGE/metalogo.png";
import { Button } from "../../CommonComponent/Button";
import { SequentialText } from "../../CommonComponent/SequentialText";
import { CommonHeading } from "../../CommonComponent/CommonHeading";
import { Blogcontainer } from "../../CommonComponent/Blogcontainer";
import truecallerlogo from "../../assets/HomeImage/IMAGE/truecallerlogo.png";
import ecosystemimg from "../../assets/HomeImage/IMAGE/ecosystem-img.png";
import RevenueCardContainer from "../../CommonComponent/RevenueCardConatainer";
import Reviews from "../../Component/Reviews";
import CallforAction from "../../Component/CallforAction";

const LottieAnimation = lazy(() =>
  import("../../CommonComponent/LottieAnimation")
);
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const TextCardContainer = lazy(() =>
  import("../../CommonComponent/TextCardContainer")
);
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
const ContentImageBlock = lazy(() =>
  import("../../CommonComponent/ContentImageBlock")
);
const FAQ = lazy(() => import("../../CommonComponent/FAQ"));
const CallToAction = lazy(() => import("../../CommonComponent/CallToAction"));
const ShimmerUI = lazy(() => import("../../Component/ShimmerUI"));
const DeveloerApis = lazy(() => import("../../Component/DeveloerApis"));
const GlobalImpact = lazy(() => import("../../Component/GlobalImpact"));

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<ShimmerUI />}>
    <Component {...props} />
  </Suspense>
);

const LazyImage = ({ src, alt, height, width }) => (
  <img src={src} alt={alt} loading="lazy" height={height} width={width} />
);

export const Home = () => {
  return (
    <section>
      <div className="relative w-full h-full overflow-hidden flex items-start justify-center mb-16">
        {/* Hero Section */}
        <div className="relative grid gap-10 md:grid-cols-2 items-center">
          {/* Left Section (Text & Button) */}
          <div className="flex flex-col gap-4 md:gap-2 items-start justify-center animate-fadeIn mt-10 px-4 md:mt-32 sm:px-2 w-full">
            <div className="w-full">
              {/* Title */}
              <p className="text-[32px] sm:text-[40px] md:text-6xl font-semibold text-black animate-fadeIn leading-tight md:mb-4">
                Connect Better, Engage Better
              </p>

              <h1 className="text-[16px] sm:text-[20px] md:text-[26px] text-[rgba(109,107,107,0.8)] font-afacad font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] tracking-[-0.26px] animate-slideInLeft mb-8 md:mb-6">
                Transform customer interactions with thoughtful <br />
                intelligent communication
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-2">
              <a href="/Contact">
                <button className="text-white border border-[#2A7CF5] bg-[#0052CC] font-medium text-[16px] px-14 py-[10px] rounded-[8px] hover:bg-[#2A7CF5] transition-all duration-300">
                  Get Started
                </button>
              </a>
              <a href="/SMSpricing">
                <button className="text-[#5956D6] border border-[#2A7CF5] font-medium text-[16px] px-14 py-[10px] rounded-[8px] hover:bg-[#0052CC] hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </a>
            </div>

            {/* Trial Text – moved closer to buttons */}
            <div className="text-[15px] text-black font-medium">
              Free trial <span className="mx-2">|</span> No credit card required{" "}
              <span className="mx-2">|</span> Flexible pricing
            </div>

            {/* Info Boxes */}
            <div className="flex justify-start gap-2 mt-20">
              {/* Box 1 */}
              <div
                className="flex flex-col items-center gap-[4px] px-2 py-[10px] rounded-[8px] border border-[#D5D1D1] bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] 
w-[90px] h-[80px] md:w-[116px] md:h-[99px] justify-between text-center"
              >
                <p className="text-[#1368C7] font-roboto text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[22.5px]">
                  7 Days <br /> Free Trial
                </p>
                <p className="text-[10px] md:text-[12px] text-black leading-tight whitespace-nowrap">
                  No payment required
                </p>
              </div>

              {/* Box 2 */}
              <div
                className="flex flex-col items-center gap-[4px] px-2 py-[10px] rounded-[8px] border border-[#D5D1D1] 
bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] 
w-[90px] h-[80px] sm:w-[116px] sm:h-[99px] justify-between text-center"
              >
                <p className="text-[#1368C7] font-roboto text-[14px] sm:text-[16px] font-semibold leading-[20px] sm:leading-[22.5px]">
                  An IIM- <br /> Alumni
                </p>
                <p className="text-[10px] sm:text-[12px] text-black leading-tight whitespace-nowrap">
                  Founded Company
                </p>
              </div>

              {/* Box 3 – Image */}
              <div
                className="flex flex-col items-center justify-center gap-[4px] px-2 py-[12px] rounded-[8px] border border-[#D5D1D1] 
bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] 
w-[90px] h-[80px] sm:w-[116px] sm:h-[99px]"
              >
                <img
                  src={metalogo}
                  alt="meta logo"
                  className="w-30 h-25 sm:w-30 sm:h-25 rounded-md object-contain"
                />
              </div>

              {/* Box 4 – Image */}
              <div
                className="flex flex-col items-center justify-center gap-[4px] px-2 py-[12px] rounded-[8px] border border-[#D5D1D1] 
bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] 
w-[90px] h-[80px] sm:w-[116px] sm:h-[99px]"
              >
                <img
                  src={truecallerlogo}
                  alt="truecaller logo"
                  className="w-30 h-25 sm:w-30 sm:h-25 rounded-md object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="relative flex justify-center animate-zoomIn mt-[10px] md:mt-[2px]">
            <LazyImage
              src={heroimage}
              alt="Hero"
              height={363}
              width={545}
              className="max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* Header Section */}
        <div className="px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-700 animate-fade-in-up">
            Trusted by 1100+ Businesses
          </h2>
        </div>

        {/* Brand Section */}
        <div className="px-16 my-4">
          <LazyComponent
            Component={BrandSection}
            props={{ data: Brandimage }}
            className="animate-fade-in-up"
          />
        </div>

        {/* Stats Cards Section */}
        <div className="py-12 px-16">
          <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 sm:px-6 flex flex-col items-center justify-center text-center w-full sm:w-[225px] md:w-[280px]">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                10<span className="text-[#5956D6]">+</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                Registered Users
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 sm:px-6 flex flex-col items-center justify-center text-center w-full sm:w-[225px] md:w-[280px]">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                254<span className="text-[#5956D6]">+</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                Millions Voice Pulses Annually
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 sm:px-6 flex flex-col items-center justify-center text-center w-full sm:w-[225px] md:w-[280px]">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                99.9<span className="text-[#5956D6]">%</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                API Uptime
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 sm:px-6 flex flex-col items-center justify-center text-center w-full sm:w-[225px] md:w-[280px]">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                600<span className="text-[#5956D6]">+</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                Operators Connections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="container mx-auto px-4 py-4 text-center">
        {/* Heading & Subtext */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 animate-fade-in">
            What We Offer
          </h2>
          <p className="text-2xl text-gray-600 mt-2 max-w-2xl mx-auto animate-fade-in-up">
            We offer a full suite of communication APIs designed to connect
            businesses with customers.
          </p>
        </div>

        {/* Offerings Cards */}
        <div className="">
          <LazyComponent
            Component={Boxcontainer}
            props={{
              carddata: offers,
            }}
          />
        </div>
      </div>

      {/* Advanced PaaS Section */}
      <div className="mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-12 justify-between md:gap-12">
        {/* Image - Mobile me upar, md me left */}
        <div className="flex justify-center md:justify-start animate-fade-in-up order-1">
          <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[580px] aspect-[60/61]">
            <img
              src={features}
              alt="features-img"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text - Mobile me niche, md me right */}
        <div className="flex flex-col gap-2  md:text-left animate-fade-in order-2">
          <p className="text-[26px] sm:text-[28px] md:text-[40px] text-[#0052CC] font-medium">
            Enterprise Communications.
          </p>
          <h2 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-primary">
            SMS | RCS | WhatsApp | Email | Voice
          </h2>
          <p className="text-[#6B7280] font-[Afacad] text-lg sm:text-base md:text-[17px] font-medium">
            We want to keep your operations running smoothly. That’s why our
            platform is easy to work with. Choose from a wide range of
            integrations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap md:justify-start gap-4 mt-6 p-0">
            <Button
              name="Contact us Now"
              link="/Contact"
              className="hover:scale-105 transition-transform duration-200"
            />
            <Button
              name="Schedule a Demo"
              link="/ScheduleDemo"
              btnstyle="change"
              className="hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-hidden py-8 px-2 sm:px-4 lg:px-[75px]">
        <div className="max-w-full mx-auto flex justify-between items-center sm:gap-10 ">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px] space-y-10 text-center md:text-left">
            <div className="">
              <h2 className="text-[28px] text-start sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
                Create Your{" "}
                <span className="text-blue-600">conversational ecosystem</span>{" "}
                with multiple <br className="hidden sm:block" />
                integration options
              </h2>

              <p className="mt-2 text-gray-600 text-[13px] text-start sm:text-base md:text-lg leading-relaxed font-[Afacad] font-medium md:mt-[20px]">
                We want to keep your operations running smoothly. That’s why our
                platform is easy to work with. Choose from a wide range of
                integrations to build and add on top of our SMS API, and easily
                configure them with your existing systems.
              </p>
            </div>

            {/* Brand Slider */}
            <div className="px-0 sm:px-4 my-4 md:mt-8">
              <LazyComponent
                Component={BrandSection}
                props={{ data: Brandimage2 }}
              />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center md:justify-end md:pl-4 w-full md:w-auto">
            <img
              src={ecosystemimg}
              alt="Integration Illustration"
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] h-auto md:h-[300px] object-contain"
            />
          </div>
        </div>
      </div>

      <DeveloerApis />

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
            Why Do Businesses Choose Connex Better?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto animate-fade-in-up">
            Connex Better provides reliable communication solutions and seamless
            API integration, ensuring smooth operations and enhanced customer
            interactions.{" "}
          </p>
        </div>
        <div className="">
          <LazyComponent
            Component={TextCardContainer}
            props={{
              carddata: chooseConnex,
            }}
          />
        </div>
      </div>

      <GlobalImpact />

      {/* Boost Revenue Section */}
      <div className="w-full max-w-[90%] mx-auto py-10 px-4 sm:px-6 lg:px-12 mt-10">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0052CC] leading-tight">
            Boost Revenue & Grow Your Business
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600 max-w-3xl mx-auto">
            Utilize our dependable AI platform designed to streamline the
            journey from discussions to successful conversions.
          </p>
        </div>

        {/* Cards Section */}
        <div className="">
          <LazyComponent
            Component={RevenueCardContainer}
            props={{
              carddata: Boostrevenue,
            }}
          />
        </div>
      </div>

      <Reviews />

      {/* Insights Section */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <CommonHeading
            h="Insights & Updates"
            p="Stay updated with the latest trends, tips, and guides on API solutions and business communication strategies."
          />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Insights.map((ele, ind) => (
            <div
              key={ind}
              className="rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-100 hover:shadow-xl p-5"
            >
              <Blogcontainer
                title={ele.title}
                img={ele.img}
                buttonname={ele.buttonname}
                buttlink={ele.bttonlink}
                date={ele.date}
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <LazyComponent Component={FAQ} props={{ data: homeFAQ }} />

      <CallforAction />
    </section>
  );
};

export default Home;
