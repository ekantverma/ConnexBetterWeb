import React from "react";
import { Suspense, lazy } from "react";
import { offers } from "../../Constant/Homedata";
import missionimg from "../../assets/Aboutimg/mision.svg";
import visionimg from "../../assets/Aboutimg/ourvision.svg";
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
import { NavLink } from "react-router-dom";
import { Button } from "../../CommonComponent/Button";
import { FaStar } from "react-icons/fa";
import brand3 from "../../assets/BrandImage/IMAGE/image 30-CDat-g8k.png";
import brand4 from "../../assets/BrandImage/IMAGE/image 31-DKM9VzEq.png";
import brand11 from "../../assets/BrandImage/IMAGE/trustly-logo.png";
import brand13 from "../../assets/BrandImage/IMAGE/brand13-BpnslQ1f.png";
import brand14 from "../../assets/BrandImage/IMAGE/brand14-BzU02V1H.png";
import about_img from "../../assets/Aboutimg/about-img.png";
import sol_img_1 from "../../assets/Aboutimg/sol-img-1.png";
import sol_img_2 from "../../assets/Aboutimg/sol-img-2.png";
import sol_img_3 from "../../assets/Aboutimg/sol-img-3.png";
import sol_img_4 from "../../assets/Aboutimg/sol-img-4.png";

const About = () => {
  const features = [
    { icon: sol_img_4, title: "Fast Onboarding" },
    { icon: sol_img_3, title: "Premium Routes" },
    { icon: sol_img_2, title: "High Delivery Percentage" },
    { icon: sol_img_1, title: "Unbeatable Pricing" },
  ];

  return (
    <>
      <div className="bg-[#3E058A] px-4 sm:px-8 py-8 flex flex-col items-center gap-12 text-center animate-fadeInUp">
        <div className="max-w-4xl w-full space-y-6">
          {/* Title */}
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight animate-scaleIn leading-snug">
            About Us
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-slideIn">
            Powering Smart Conversations Across Channels
          </p>

          {/* Rating and Logos Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap animate-fadeIn">
            {/* Rating Card */}
            <div className="backdrop-blur-md bg-white/70 border border-gray-200 shadow-lg px-6 py-3 rounded-xl flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <p className="text-black font-semibold">Rating</p>
              <div className="flex items-center text-lg font-bold text-gray-900">
                <FaStar className="text-yellow-400 mr-1" /> 4.9+
              </div>
            </div>

            {/* Brand Logos */}
            <div className="flex items-center flex-wrap justify-center gap-4">
              {[brand3, brand4, brand11, brand13, brand14].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer"
                  alt={`Brand ${index + 1}`}
                />
              ))}

              {/* Extra Brands Count */}
              <div className="bg-white text-[#3E058A] px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition">
                1k+
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-2 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left: Text Section */}
          <div className="flex-1 text-center md:text-left animate-fadeInUp">
            <h2 className="text-[40px] sm:text-5xl font-extrabold text-[#101010] font-afacad mb-6">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg text-[#0F0E0E8A] leading-7 font-afacad font-medium">
              Connex Better is a leading communication platform that empowers
              businesses to build smarter, faster, and more personalized
              customer interactions across every channel — including WhatsApp,
              SMS, Email, IVR, and RCS.
              <br />
              <br />
              Built with AI-powered automation, a unified API layer, and robust
              analytics, Connex Better simplifies complex messaging workflows
              and helps brands scale communication with confidence.
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="flex-1 flex justify-center animate-fadeInUp">
            <img
              src={about_img}
              alt="About Connex Better"
              className="w-[510px] h-[325px] object-cover rounded-[5%] mb-6 md:mb-0"
            />
          </div>
        </div>
      </div>

      <section>
        <div className="w-full py-6 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center animate-fadeInUp mt-8 gap-3">
          {/* Heading */}
          <h2 className="text-[38px] sm:text-[42px] font-bold text-[#101010] tracking-wide font-afacad">
            Connex <span className="text-blue-600">Better</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[28px] sm:text-[32px] font-medium text-[#101010] font-afacad">
            Connect Better. Engage Better.
          </p>

          {/* Description */}
          <p className="text-[20px] sm:text-lg text-gray-700 max-w-2xl leading-relaxed font-afacad mt-2 font-semibold">
            Bulk SMS, RCS, IVR, and WhatsApp Service Provider in India
            <br className="hidden sm:block" />
            Trusted by{" "}
            <span className="font-semibold text-[#5956D6]">
              1100+ Businesses Globally
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="/Contact">
              <button className="text-white border border-[#5956D6] bg-[#5956D6] font-medium text-[16px] px-6 py-[10px] rounded-[8px] hover:bg-[#6f6dd1] transition-all duration-300">
                Start Free Trial
              </button>
            </a>
            <a href="/SMSpricing">
              <button className="text-[#5956D6] border border-[#5956D6] font-medium text-[16px] px-6 py-[10px] rounded-[8px] hover:bg-[#5956D6] hover:text-white transition-all duration-300">
                View Pricing
              </button>
            </a>
          </div>
        </div>

        <div className="container">
          <div className="w-full bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-8xl mx-auto flex flex-col items-center">
              {/* Heading */}
              <div className="max-w-4xl w-full">
                <h2 className="text-center text-[40px] sm:text-[38px] font-extrabold text-gray-900 mb-12 leading-tight">
                  Comprehensive Messaging Solutions to Reach Your Customers
                </h2>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 sm:gap-5 bg-white p-1 sm:p-2 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Icon as Image */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <span className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Offerings Section */}
        <Suspense>
          <div className="container py-14">
            <div className="max-w-6xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-5xl font-bold text-[#0052CC] mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-xl mx-auto font-semibold">
                We offer a full suite of communication APIs designed to connect
                businesses with customers.
              </p>
            </div>

            {/* Offer Cards Section */}
            <div className="">
              <Boxcontainer carddata={offers} />
            </div>
          </div>
        </Suspense>

        <div className="bg-white"></div>
      </section>
    </>
  );
};

export default About;
