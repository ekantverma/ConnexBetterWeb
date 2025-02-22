import React from 'react';
import { Suspense,lazy } from 'react';
import CommonHeading from '../../CommonComponent/CommonHeading';
// Ensure you import these components
import { Brandimage } from '../../Constant/Homedata';
import { offers,chooseConnex } from '../../Constant/Homedata';
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
import RadiobuttonwithText from '../../CommonComponent/RadiobuttonwithText';
// import Rangeprice from './Rangeprice';
import {Button} from '../../CommonComponent/Button';

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
          "1000 free service conversations/month"
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
          "Dedicated account manager"
        ],
        button: "Contact Us",
      },
      {
        plan: "Enterprise",
        price: "For organizations who need more.",
        heading:"Do you want a custom plan?",
        description: [
          "Price customized based on your needs",
        ],
        button: "Contact Us",


      }
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
        <div className='container flex items-center justify-center text-4xl text-primery font-medium'>WhatsApp Pricing</div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingData.WhatsApp.map((plan, index) => (
            <div
              key={index}
              className="bg-secondary shadow-md rounded-lg p-6 text-center border border-gray-200 flex flex-col items-center justify-center"
            >
              <h2 className="text-3xl font-bold text-blue-600">{plan.plan}</h2>
              <p className="text-2xl">{plan.numbers}</p>
              {plan.price && <p className="text-2xl font-semibold my-4">{plan.price}</p>}
              <ul className="text-gray-600 mb-6 space-y-1">
                {plan.description.map((item, i) => (
                    <li key={i} className="mb-2">
                  <RadiobuttonwithText text={item}></RadiobuttonwithText>
                </li>
                ))}
              </ul>

              {/* Conditional rendering for specific components */}
              {plan.component && <Rangeprice />}
              {/* Replace this with your actual Button component */}
              <Button name={plan.button} link="/Contact"></Button>
            </div>
          ))}
        </div>
       
      </div>
      <div className="container">
      <LazyComponent Component={BrandSection}  props={{ data: Brandimage }}/>

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
