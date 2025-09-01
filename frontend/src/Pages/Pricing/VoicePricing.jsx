import { Suspense, lazy, useState } from "react";
import CommonHeading from "../../CommonComponent/CommonHeading";
import { Brandimage } from "../../Constant/Homedata";
import { offers, chooseConnex } from "../../Constant/Homedata";
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
import Radiobuttonwithtextwithoubg from "../../CommonComponent/Radiobuttonwithtextwithoutbg";
import TextCardContainer from "../../CommonComponent/TextCardContainer";

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export default function WhatsApppricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

 const plans = [
  {
    plan: "Inbound IVR",
    price: {
      monthly: "₹1200",
      yearly: "₹12,960", // 1200 × 12 = 14,400 → 10% off = 12,960
    },
    time: billingCycle === "monthly" ? "/ monthly" : "/ yearly",
    button: "View Pricing",
    description: [
      "Multi-Agent Management",
      "Priority Routing",
      "Comprehensive Reporting",
      "Call Recording",
      "CRM Integration",
      "Data Security Compliance",
      "Call Queue Management",
      "Real-Time Monitoring",
      "User-Friendly Interface",
      "Call Alerts and Notifications",
      "Multilingual Support",
      "High Uptime Guarantee",
    ],
  },
  {
    plan: "Contact Center Solution",
    price: {
      monthly: "₹1700",
      yearly: "₹18,360", // 1700 × 12 = 20,400 → 10% off = 18,360
    },
    time: billingCycle === "monthly" ? "/ monthly" : "/ yearly",
    button: "View Pricing",
    description: [
      "Smart Dashboard",
      "Custom Call Flow",
      "Call Monitoring",
      "Smart Call Routing",
      "Smart Agent Routing",
      "Call Forwarding",
      "Call Recording",
      "Automated Dialer",
      "Sticky Agent",
      "Click to Call",
      "CRM Integration",
      "Live Call Reporting",
      "Agent Productivity Analysis",
    ],
    component: true,
  },
  {
    plan: "Voice OBD",
    price: {
      monthly: "₹0.17 / Call",
      yearly: "For organizations who need more",
    },
    description: [
      "Personalized Voice Campaigns",
      "Interactive User Engagement",
      "Real-Time API Trigger on Keypress",
      "Comprehensive Delivery Reports",
      "Automated Call Scheduling",
      "Bulk Voice Broadcasting",
      "Multi-Language Support",
      "Call Retry Mechanism",
      "Dynamic Content Injection",
      "Call Recording",
      "Customizable Call Flow",
      "CRM Integration",
    ],
    button: "View Pricing",
  },
];


  return (
    <section className="bg-[#E9F8F6]">
      <div className="w-full bg-[#3E058A] text-white px-4 md:px-20 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Unbeatable Pricing - Find Your Perfect Plan Now
        </h2>
        <p className="text-base md:text-2xl max-w-5xl mx-auto text-gray-300">
          Discover How Our Innovative Approach Can Save You Money and Boost Your
          Business Performance!
        </p>
      </div>
      {/* Cards */}
      <div className="pt-10 px-4 sm:px-10 lg:px-20">
        {/* Title */}
        <h2 className="text-center text-4xl font-semibold text-blue-600 mb-8">
          Voice Pricing
        </h2>

        {/* Toggle Button */}
        <div className="flex justify-center items-center gap-2 mb-10 bg-gray-200 w-fit mx-auto rounded-full px-2 py-2">
          <button
            className={`px-8 py-2 rounded-full text-xl font-medium transition ${
              billingCycle === "monthly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full text-xl font-medium transition ${
              billingCycle === "yearly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly (-10%)
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md px-6 py-4 flex flex-col items-center 
              ${
                plan?.plan === "Contact Center Solution"
                  ? "lg:scale-100 rounded-[24px] border-[2px] border-[rgba(42,124,245,0.80)] bg-[#FFF] shadow-[0_0_20px_0.5px_rgba(0,82,204,0.50)]"
                  : "border border-gray-200"
              }`}
            >
              {/* Enterprise special card */}
              {plan?.plan === "Enterprise" ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center">
                  <h3 className="text-5xl font-bold text-blue-700 mb-8">
                    {plan.plan}
                  </h3>
                  <h3 className="text-4xl font-semibold text-black mb-8">
                    {plan.price[billingCycle]}
                  </h3>
                  <a href="/Contact" className="w-full flex justify-center">
                    <button className="bg-white border border-blue-600 text-blue-600 font-semibold py-3 px-12 rounded-md hover:bg-blue-600 hover:text-white transition text-xl">
                      {plan?.button || "Contact Us"}
                    </button>
                  </a>
                </div>
              ) : (
                <>
                  {/* Normal Plans */}
                  <div className="space-y-16 text-center">
                    <div>
                      <h3
                        className={`mb-2 ${
                          plan?.plan === "Contact Center Solution"
                            ? "text-4xl font-semibold text-green-600"
                            : "text-4xl font-semibold text-blue-600"
                        }`}
                      >
                        {plan?.plan}
                      </h3>
                    </div>

                    {plan?.price && (
                      <div>
                        <p className="text-4xl font-bold text-black mb-4">
                          {plan.price[billingCycle]}
                          <span className="text-black text-2xl font-semibold ml-1">
                            {plan?.time}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>

                  {plan?.description && plan.description.length > 0 && (
                    <>
                      <hr className="w-full border-t border-gray-300 my-6" />

                      <ul className="text-gray-700 w-full mb-6 space-y-3 text-left">
                        <li className="font-semibold text-lg text-black">
                          Everything in Free:
                        </li>
                        {plan.description.map((item, i) => (
                          <li key={i} className="flex items-center text-md">
                            <Radiobuttonwithtextwithoubg text={item} />
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Button bottom fix */}
                  <a
                    href="/Contact"
                    className="mt-auto w-full flex justify-center"
                  >
                    <button className="bg-white border border-blue-600 text-blue-600 font-semibold py-2 px-10 rounded-md hover:bg-blue-600 hover:text-white transition text-xl w-full">
                      {plan?.button || "Contact Us"}
                    </button>
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>


      <div className="container mx-auto px-4 mt-16">
        <LazyComponent Component={BrandSection} props={{ data: Brandimage }} />
      </div>
      {/* Offerings Section */}
      <div className="container mx-auto px-4 mt-12">
        <LazyComponent
          Component={Boxcontainer}
          props={{
            heading: "What we Offer",
            para: "We offer a full suite of communication APIs designed to connect businesses with customers. Our services include:",
            carddata: offers,
          }}
        />
      </div>
      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 mt-12">
        <LazyComponent
          Component={Boxcontainer}
          props={{
            heading: "Why do businesses choose Connex Better",
            para: "Connex Better provides reliable communication solutions and seamless API integration, ensuring smooth operations and enhanced customer interactions.",
            carddata: chooseConnex,
          }}
        />
      </div>
    </section>
  );
}
