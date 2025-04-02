import React from "react";
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

const pricingData = {
  Email: [
    {
      plan: "Free",
      price: "₹450/Monthly",
      description: ["12,000 Emails/monthly", "1,000 Contacts"],
      button: "Contact Us",
    },
    {
      plan: "Premium",
      price: "",
      heading: "",
      description: ["Unlimited E-mails Monthly For the mentioned contacts"],
      component: true,
      button: "Contact Us",
    },
    {
      plan: "Enterprise",
      price: "For organizations who need more.",
      heading: "Do you want a custom plan?",
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

export default function Email() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <CommonHeading
          h="Unbeatable Pricing - Find Your Perfect Plan Now"
          p="Discover How Our Innovative Approach Can Save You Money and Boost Your Business Performance!"
        />
        <div className="text-center text-4xl text-primary font-semibold mt-6">
          Email Pricing
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pricingData.Email.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
            >
              <h2 className="text-3xl font-bold text-blue-700">{plan.plan}</h2>
              {plan.price && (
                <p className="text-2xl font-semibold text-green-600 my-4">{plan.price}</p>
              )}
              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.description.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <RadiobuttonwithText text={item} />
                  </li>
                ))}
              </ul>

              {/* Conditional rendering for specific components */}
              {plan.component && <Rangeprice />}

              <Button
                name={plan.button}
                link="/Contact"
                className="mt-6 bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
              />
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