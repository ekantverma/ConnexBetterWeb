import React, { Suspense, lazy } from "react";
import CommonHeading from "../../CommonComponent/CommonHeading";
import { Brandimage, offers, chooseConnex } from "../../Constant/Homedata";
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
import RadiobuttonwithText from "../../CommonComponent/RadiobuttonwithText";
import { Button } from "../../CommonComponent/Button";

const pricingData = {
  WhatsApp: [
    {
      plan: "Starter",
      price: "₹1499/ monthly",
      description: [
        "1200 Messages per Minute",
        "Template Message APIs",
        "Real-Time Reports & Analytics with Downloadable Options",
        "Bulk WhatsApp Notifications and Campaign Analytics",
        "Free Blue Tick Verification support",
        "Template Approval for Up to 100 Templates",
        "APIs, HTTPS, Encryption, and Webhooks",
        "1000 free service conversations/month",
      ],
      button: "Contact us",
    },
    {
      plan: "Growth",
      price: "₹1999/ monthly",
      description: [
        "3000 Messages per Minute",
        "All features in Starter Plan",
        "CSV Campaign Scheduler",
        "Carousel Template Click Tracking",
        "Campaign Click Tracking",
        "Smart Agent Routing",
        "Dedicated account manager",
      ],
      button: "Contact Us",
    },
    {
      plan: "Enterprise",
      price: "For organizations who need more.",
      description: ["Price customized based on your needs"],
      button: "Contact Us",
    },
  ],
};

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export default function WhatsApppricing() {
  return (
    <section>
      <div className="container">
        <CommonHeading
          h="Unbeatable Pricing - Find Your Perfect Plan Now"
          p="Discover How Our Innovative Approach Can Save You Money and Boost Your Business Performance!"
        />
        <div className="container flex items-center justify-center text-4xl text-primary font-medium">
          WhatsApp Pricing
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {pricingData.WhatsApp.map((plan, index) => (
            <div key={index} className="relative">
              {/* Plan Label */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider">
                {index === 0
                  ? "Basic Plan"
                  : index === 1
                  ? "Standard Plan"
                  : "Premium Plan"}
              </div>

              {/* Card */}
              <div
                className="relative bg-white/80 shadow-lg rounded-2xl p-8 text-center border border-gray-200 mt-6"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
                  backgroundSize: "6px 6px",
                }}
              >
                {/* Plan Title */}
                <h2 className="text-4xl font-bold text-blue-700">
                  {plan.plan}
                </h2>
                <p className="text-xl text-gray-600 mt-3 tracking-wide">
                  Perfect for growing businesses
                </p>

                {/* Price */}
                {plan.price && (
                  <p className="text-4xl font-semibold text-green-600 my-6">
                    {plan.price}
                  </p>
                )}

                {/* Features List */}
                <ul className="text-gray-700 text-lg space-y-3 mt-6 text-left">
                  {plan.description.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✔</span>
                      <RadiobuttonwithText text={item} />
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  name={plan.button}
                  link="/Contact"
                  className="mt-8 bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <LazyComponent Component={BrandSection} props={{ data: Brandimage }} />
      </div>
      {/* Offerings Section */}
      <div className="container">
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
      <div className="container">
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