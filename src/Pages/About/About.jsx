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

const About = () => {
  const content = [
    "🚀 Empowering Businesses with Smarter Communication",
    "Connex Better is a cutting-edge customer engagement platform designed to transform interactions through AI-driven messaging solutions. We offer:",
    "✅ Omni-Channel Messaging – Bulk SMS, WhatsApp Business API, RCS, IVR, Email Marketing & more.",
    "✅ Automation & AI – Marketing & Workflow Automation, Predictive Analytics for personalized campaigns.",
    "✅ Seamless Integrations – Connect effortlessly with Salesforce, Shopify, Zoho, WebEngage, and other top CRMs.",
    "✅ Scalable & Cost-Effective – Our CPaaS platform ensures impactful, real-time customer engagement.",
  ];

  const futureContent = [
    "🌍 Innovating for a Connected World",
    "At Connex Better, we push the boundaries of technology to redefine business communication.",
    "🔹 AI & Web 3.0-Powered Engagement – Smarter, faster, and personalized customer experiences.",
    "🔹 Data-Driven Insights – Understanding user behavior to drive higher engagement & retention.",
    "🔹 Future-Ready Solutions – OTP Authentication, Missed Call Services, WhatsApp Chatbots & Voice Broadcasting.",
    "We enable businesses to connect, engage, and grow with cutting-edge communication solutions.",
    "📩 Join us in revolutionizing customer engagement!",
  ];

  const features = [
    { icon: "⏱️", title: "Fast Onboarding" },
    { icon: "🔗", title: "Premium Routes" },
    { icon: "🚚", title: "High Delivery Percentage" },
    { icon: "₹", title: "Unbeatable Pricing" },
  ];
  return (
    <>
      <div className="bg-[#f8f8f8] flex flex-col justify-center items-center gap-6 py-16 px-6 text-center animate-fadeInUp mt-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-primary tracking-wide animate-scaleIn">
          ABOUT US
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 max-w-2xl animate-slideIn">
          We enable enterprises to deliver messaging content across multiple
          channels in a matter of seconds, across the globe.
        </p>

        {/* Rating & Brand Logos */}
        <div className="flex flex-col md:flex-row items-center gap-4 animate-fadeIn">
          {/* Rating */}
          <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full">
            <p className="font-semibold text-gray-800">Rating</p>
            <p className="flex items-center text-lg font-semibold text-gray-900">
              <FaStar className="text-yellow-400 mr-1" /> 4.9+
            </p>
          </div>

          {/* Brand Logos */}
          <div className="flex items-center gap-3">
            <img
              src={brand3}
              className="h-10 w-10 object-contain"
              alt="Brand 1"
            />
            <img
              src={brand4}
              className="h-10 w-10 object-contain"
              alt="Brand 2"
            />
            <img
              src={brand11}
              className="h-10 w-10 object-contain"
              alt="Brand 3"
            />
            <img
              src={brand13}
              className="h-10 w-10 object-contain"
              alt="Brand 4"
            />
            <img
              src={brand14}
              className="h-10 w-10 object-contain"
              alt="Brand 5"
            />

            {/* More Brands */}
            <div className="bg-primary text-black px-5 py-2 rounded-full font-semibold flex items-center justify-center">
              1k+
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-[#f8f8f8] py-16 px-6 md:px-12 lg:px-20 text-center animate-fadeInUp mt-2">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-wide mb-6 animate-scaleIn">
            About Connex Better
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-gray-700 leading-relaxed animate-slideIn bg-white p-4 rounded-xl shadow-md">
            {content.map((paragraph, index) => (
              <p key={index} className="">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full bg-secondary py-14 px-6 md:px-12 flex flex-col items-center text-center gap-4 animate-fadeInUp shadow-lg rounded-xl mt-8">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-primary tracking-wide">
            Connex Better
          </h2>

          {/* Subtitle */}
          <p className="text-2xl font-medium text-primary">
            Connect Better. Engage Better.
          </p>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Bulk SMS, RCS, IVR, and WhatsApp Service Provider in India, trusted
            by 1100+ businesses globally.
          </p>

          {/* Call Button */}
          <a
            href="tel:+919220696606"
            className="mt-4 bg-primary text-white bg-blue-600 text-lg font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
          >
            📞 +91 92206 96606
          </a>
        </div>

        <div className="container">
          <div className="bg-gray-100 py-14 px-6">
            <div className="max-w-5xl mx-auto">
              {/* Heading */}
              <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
                Comprehensive Messaging Solutions to Reach Your Customers
              </h2>

              {/* Feature Grid */}
              <div className="grid gap-8 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 bg-white p-5 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    {/* Feature Icon */}
                    <div className="text-4xl text-blue-600">{feature.icon}</div>

                    {/* Feature Title */}
                    <span className="text-lg font-semibold text-gray-800">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a full suite of communication APIs designed to connect
                businesses with customers. Our services include:
              </p>
            </div>

            {/* Offer Cards Section */}
            <div className="">
              <Boxcontainer carddata={offers} />
            </div>
          </div>
        </Suspense>

        <div className="container py-14 bg-gray-100">
          <div className="max-w-5xl mx-auto text-center py-10">
            {/* Heading */}
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Future of Omni-Channel Communications
            </h2>

            {/* Content Section */}
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed bg-white p-4 rounded-xl shadow-md">
              {futureContent.map((paragraph, index) => (
                <p key={index} className="max-w-3xl mx-auto">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="container grid md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img src={missionimg} loading="lazy" className="h-16 w-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Provide SaaS platforms to enable enterprises to create
              differentiated mobile engagement for their customers.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img src={visionimg} loading="lazy" className="h-16 w-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To enable enterprises to provide a connected, secure, and
              delightful user experience to their customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
