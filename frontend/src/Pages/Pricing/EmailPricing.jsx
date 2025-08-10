import React, { useState } from "react";
import { Suspense, lazy } from "react";
import CommonHeading from "../../CommonComponent/CommonHeading";
// Ensure you import these components
import { Brandimage } from "../../Constant/Homedata";
import { offers, chooseConnex } from "../../Constant/Homedata";
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
import RadiobuttonwithText from "../../CommonComponent/RadiobuttonwithText";
import Rangeprice from "../../CommonComponent/Rangeprice";
import { Button } from "../../CommonComponent/Button";
import TextCardContainer from "../../CommonComponent/TextCardContainer"

const pricingData = {
  monthly: [
    {
      plan: "Free",
      price: "₹450",
      time: "/month",
      description: ["135 email/day", "1,000 Contacts", "1,000 Contacts"],
      button: "Contact us",
    },
    {
      plan: "Premium",
      price: "₹830",
      time: "/month",
      description: ["135 email/day", "1,000 Contacts", "1,000 Contacts"],
      button: "Contact us",
    },
    {
      plan: "Enterprise",
      price: "₹1000",
      time: "/month",
      description: ["135 email/day", "1,000 Contacts", "1,000 Contacts"],
      button: "Contact us",
    },
  ],
  yearly: [
    {
      plan: "Free",
      price: "₹405",
      time: "/month (Yearly)",
      description: ["135 email/day", "1,000 Contacts", "1,000 Contacts"],
      button: "Contact us",
    },
    {
      plan: "Premium",
      price: "₹747",
      time: "/month (Yearly)",
      description: ["135 email/day", "1,000 Contacts", "1,000 Contacts"],
      button: "Contact us",
    },
    {
      plan: "Enterprise",
      price: "₹900",
      time: "/month (Yearly)",
      description: ["135 email/day", "1,000 Contacts", "1,000 Contacts"],
      button: "Contact us",
    },
  ],
};

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export default function Email() {
  const [billingCycle, setBillingCycle] = useState("monthly");

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
          Email Pricing
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
          {pricingData[billingCycle].map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-[1.01]"
            >
              <div className="space-y-20 text-center">
                <div>
                  <h3 className="text-4xl font-semibold text-[#747474] mb-2">
                    {plan.plan}
                  </h3>
                </div>
                <div>
                  <p className="text-4xl font-bold text-black mb-4">
                    {plan.price}
                    <span className="text-[#575757] text-xl">{plan.time}</span>
                  </p>
                  <Button
                    name={plan.button}
                    link="/Contact"
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition text-sm"
                  />
                </div>
              </div>
              <hr className="w-full border-t border-gray-300 my-6" />{" "}
              <ul className="text-gray-700 w-full mb-6 space-y-3 text-left">
                <li className="font-semibold text-xl text-black">
                  Everything in Free:
                </li>
                {plan.description.map((item, i) => (
                  <li key={i} className="flex items-cente text-sm">
                    <RadiobuttonwithText text={item} />
                  </li>
                ))}
              </ul>
              {/* Custom component if any */}
              {plan.component && <Rangeprice />}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto px-4 mt-32">
        <div className="px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-700 animate-fade-in-up">
            Trusted by 1100+ Businesses
          </h2>
        </div>
        <LazyComponent Component={BrandSection} props={{ data: Brandimage }} />
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
    </section>
  );
}
