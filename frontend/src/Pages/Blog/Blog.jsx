import React, { useState } from "react";
import BulkSmsBlog from "./BulkSmsBlog";
import SmsApiBlog from "./SmsApiBlog";
import BulkEmailBlog from "./BulkEmailBlog";
import { MdSearch } from "react-icons/md";
import AllBlogs from "./AllBlogs";

function SMS() {
  const [activeSection, setActiveSection] = useState("ALLBLOGS");

  const renderSection = () => {
    switch (activeSection) {
      case "ALLBLOGS":
        return <AllBlogs />;
      case "SMSAPIBLOG":
        return <SmsApiBlog />;
      case "BULKSMSBLOG":
        return <BulkSmsBlog />;
      case "BULKEMAILBLOG":
        return <BulkEmailBlog />;
      default:
        return <SmsApiBlog />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <>
      <section className="bg-[#E9F8F6] sm:bg-white">
        {/* Header Section */}
        <div className="flex w-full h-full px-[75px] py-[40px] flex-col items-center gap-6 flex-shrink-0 bg-[#3E058A]">
          <h2 className="text-[#FFFEFE] text-center font-[Afacad] text-[42px] font-semibold leading-[57.6px]">
            Get Insightful Views & Updates
          </h2>

          <div className="flex items-center gap-3 px-8 py-3 bg-white rounded-full w-full max-w-[600px]">
            <MdSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 text-gray-900 bg-transparent outline-none placeholder-gray-400 text-[15px] font-semibold tracking-wide"
            />
          </div>
        </div>
        {/* Navigation Buttons - Enhanced Sticky Bar */}
        <div className="bg-white mx-[60px] mt-6 w-fit">
          <div className="hidden md:flex flex-row items-start gap-8 px-6 py-4 border border-gray-200 rounded-2xl">
            {[
              { label: "All", section: "ALLBLOGS" },
              { label: "SMS API Integration", section: "SMSAPIBLOG" },
              { label: "Bulk WhatsApp Marketing", section: "BULKSMSBLOG" },
              { label: "Email Marketing", section: "BULKEMAILBLOG" },
            ].map(({ label, section }) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  scrollToTop();
                }}
                className={`relative pb-1 text-[18px] font-medium transition-all duration-300 ${
                  activeSection === section
                    ? "text-blue-700"
                    : "text-[#69696C] hover:text-blue-600"
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 ${
                    activeSection === section
                      ? "bg-blue-600"
                      : "bg-transparent group-hover:bg-blue-300"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation for Mobile */}
        <div className="fixed bottom-6 w-screen mr-5 bg-blue-200  shadow-md md:hidden flex justify-around py-5 z-10  sm:text-sm">
          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === "SMSAPIBLOG"
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveSection("SMSAPIBLOG");
              scrollToTop();
            }}
          >
            <i className="fas fa-envelope text-2xl"></i>
            <p className="text-xl mt-1">SMS Blog</p>
          </button>

          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === "BULKSMSBLOG"
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveSection("BULKSMSBLOG");
              scrollToTop();
            }}
          >
            <i className="fas fa-shield-alt text-2xl"></i>
            <p className="text-xl mt-1">WhatsApp Blog</p>
          </button>

          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === "BULKEMAILBLOG"
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveSection("BULKEMAILBLOG");
              scrollToTop();
            }}
          >
            <i className="fas fa-globe text-2xl"></i>
            <p className="text-xl mt-1">Email Blog</p>
          </button>
        </div>

        {/* Main content */}
        <main>{renderSection()}</main>
        {/* Footer */}
        <div className="w-full py-6 sm:px-6 md:px-12 flex flex-col items-center text-center animate-fadeInUp gap-3 bg-[#E9F8F6]">
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
      </section>
    </>
  );
}

export default SMS;
