import { Suspense, lazy } from "react";
import CommonHeading from "../../CommonComponent/CommonHeading";
import { Brandimage } from "../../Constant/Homedata";
import { offers, chooseConnex } from "../../Constant/Homedata";
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
import Radiobuttonwithtextwithoubg from "../../CommonComponent/Radiobuttonwithtextwithoutbg";
import TextCardContainer from "../../CommonComponent/TextCardContainer";
const plans = [
  {
    plan: "Starter",
    price: "50,000 Messages",
    button: "View Pricing",
    description: [
      "Basic RBM message - ₹0.19",
      "Single RBM message - ₹0.21",
    ],
  },
  {
    plan: "Growth",
    price: "1,00,000 Messages",
    button: "View Pricing",
    description: [
      "Basic RBM message - ₹0.19",
      "Single RBM message - ₹0.21",
    ],
    component: true,
  },
  {
    plan: "Enterprise",
    button: "View Pricing",
  },
];

// Lazy Component Wrapper Function
const LazyComponent = ({ Component, props }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export default function RCSpricing() {
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
        <h2 className="text-center text-4xl font-semibold text-blue-600 mb-14">
          RCS Pricing
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md px-6 py-10 flex flex-col items-center 
              ${
                plan?.plan === "Growth"
                  ? "lg:scale-100 rounded-[24px] border-[2px] border-[rgba(42,124,245,0.80)] bg-[#FFF] shadow-[0_0_20px_0.5px_rgba(0,82,204,0.50)]"
                  : "border border-gray-200"
              }`}
            >
              {/*Enterprise hai to*/}
              {plan?.plan === "Enterprise" ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center">
                  <h3 className="text-5xl font-bold text-blue-700 mb-8">
                    {plan.plan}
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
                          plan?.plan === "Growth"
                            ? "text-5xl font-semibold text-green-600"
                            : "text-4xl font-semibold text-blue-600"
                        }`}
                      >
                        {plan?.plan}
                      </h3>
                      {plan?.planDesc && (
                        <h4 className="text-xl text-[rgba(0,0,0,0.80)] font-normal">
                          {plan.planDesc}
                        </h4>
                      )}
                    </div>

                    {plan?.price && (
                      <div>
                        <p className="text-3xl font-bold text-black mb-4">
                          {plan.price}
                        </p>
                        <div className="text-[#575757] text-xl mt-4 font-semibold">
                          {plan?.time}
                        </div>
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

      {/* Brand Section */}
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
