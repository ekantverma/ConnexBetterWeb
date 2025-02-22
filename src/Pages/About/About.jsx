import React from "react";
import { Suspense, lazy } from "react";
import { offers } from "../../Constant/Homedata";
import missionimg from "../../assets/Aboutimg/mision.svg";
import visionimg from "../../assets/Aboutimg/ourvision.svg"
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
import { NavLink } from "react-router-dom";
import { Button } from "../../CommonComponent/Button";
import { FaStar } from "react-icons/fa";
import brand3 from "../../assets/BrandImage/IMAGE/image 30-CDat-g8k.png";
import brand4 from "../../assets/BrandImage/IMAGE/image 31-DKM9VzEq.png";
import brand11 from "../../assets/BrandImage/IMAGE/trustly-logo.png"
import brand13 from "../../assets/BrandImage/IMAGE/brand13-BpnslQ1f.png"
import brand14 from "../../assets/BrandImage/IMAGE/brand14-BzU02V1H.png"

const About = () => {

  const content = [
    "Connex Better is a cutting-edge digital communication and engagement platform that empowers businesses with seamless, high-volume messaging solutions. Our comprehensive suite of services includes Bulk SMS, WhatsApp Business Messaging, RCS Messaging, IVR Solutions, Email Marketing, and Truecaller Verified Messaging, all designed to enhance customer interactions and drive business growth.",
    "With advanced capabilities in Marketing Automation, Workflow Automation, and Predictive Analytics powered by AI/ML, Connex Better enables organizations to create personalized, impactful, and data-driven campaigns. Trusted by businesses across diverse industries, we combine innovative technology with expert support to deliver exceptional results for customer engagement and business communication.",
    "From building connections to fostering meaningful conversations, Connex Better empowers businesses to transform their communication journeys into more successful and profitable experiences. Our wide range of SaaS-based products and services redefines how businesses interact and transact with customers. In a short span, we have fueled the growth of businesses of all sizes, helping them expand their reach and improve customer engagement.",
    "Powered by state-of-the-art technology, our CPaaS (Communication Platform as a Service) platform enhances customer experiences for hundreds of enterprises. Our scalable and cost-effective service portfolio includes Bulk SMS, RCS Messaging, IVR Solutions, Bulk Email, WhatsApp Business API, Google Verified SMS, Chatbots, and agile marketing automation solutions tailored to deliver impactful results.",
    "Our B2C Omni-Channel Customer Engagement Platform enables businesses to automate tasks and workflows, reaching leads, prospects, and customers with personalized messaging that drives higher engagement and ROI. For B2B owners and developers, Connex Better provides the flexibility to connect with customers across multiple mobile channels through a single, unified API.",
    "Connex Better integrates seamlessly with world-class software, industry-leading CRMs, and e-commerce platforms such as Salesforce, WooCommerce, Shopify, Magento, Zoho, WebEngage, MoEngage, Zapier, CleverTap, and LeadSquared, enabling businesses to unlock the power of messaging for their customers in an instant."
  ];
  const futureContent = [
    "At Connex Better, we are pioneers in leveraging emerging technologies to solve real-world challenges. By staying ahead of the curve, we constantly explore innovative solutions that utilize the latest advancements to position ourselves as leaders in the industry.",
    "By placing technology at our core, we aim to build a robust platform that understands user behavior, patterns, and customer journeys, leading to impactful engagement, monetization, and retention across multiple channels. This data-driven approach streamlines value delivery, drives growth, and maximizes profitability for enterprises.",
    "In an increasingly connected world, our mission is to empower businesses to achieve complete customer satisfaction. Our cloud-enabled, customer-centric platform integrates Web 3.0, AI, and ML technologies, delivering smarter, faster, and more personalized user experiences.",
    "With a comprehensive portfolio that includes Bulk SMS, WhatsApp Business API, RCS Messaging, IVR Solutions, OTP Authentication, Missed Call Services, and Bulk Email, Connex Better enables businesses to enhance engagement and scale operations. From bulk messaging services to WhatsApp chatbot builders and voice broadcasting, we help enterprises connect with customers effectively and efficiently, delivering measurable results."
  ];

  const features = [
    { icon: '⏱️', title: 'Fast Onboarding' },
    { icon: '🔗', title: 'Premium Routes' },
    { icon: '🚚', title: 'High Delivery Percentage' },
    { icon: '₹', title: 'Unbeatable Pricing' },
  ];
  return (<>
    <div className="bg-[#f8f8f8] flex flex-col justify-center items-center gap-2 py-14">
    <h1 className="text-5xl font-semibold text-primery">ABOUT US</h1>
    <p>We enable enterprises to deliver messaging content across</p>
    <p>channels in a matter of seconds, across the globe.</p>
    <div className="flex gap-3 items-center">
      <p>Rating</p>
      <p className="flex items-center"><FaStar className="text-yellow-400 inline" /> 4.9+</p>
      <div className="flex items-center">
      <img src={brand3} className="h-auto w-auto max-h-10 max-w-10"></img>
      <img src={brand4} className="h-auto w-auto max-h-10 max-w-10"></img>
      <img src={brand11} className="h-auto w-auto max-h-10 max-w-10"></img>
      <img src={brand13} className="h-auto w-auto max-h-10 max-w-10"></img>
      <img src={brand14} className="h-auto w-auto max-h-10 max-w-10"></img>
      <div> <p className="max-h-10 max-w-10 bg-primery p-5 rounded-full flex items-center justify-center text-white" >1k+</p></div>
     
      </div>

    </div>
   </div>
 <section>
 <div className="container">
  <h1 className="text-3xl font-bold text-primery mb-6">About Connex Better</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
  </div>

  <div className="container flex flex-col items-center gap-2 bg-secondary">
    <h2 className="text-primery text-3xl font-semibold">Connex Better</h2>
    <p className="text-xl text-primery">Connect Better. Engage Better.</p>
    <p>Bulk SMS, RCS, IVR, and WhatsApp Service Provider in India
    Trusted by 1100+ Businesses Globally</p>
    <Button name=" +919220696606" link="tel:+919220696606"><NavLink to="tel:+919220696606" target="blank" className="number-info"></NavLink></Button>
 
    </div>
  <div className="container">
  <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">
          Comprehensive Messaging Solutions to Reach Your Customers
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="block items-center justify-between bg-white p-4 shadow-md rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-blue-600">{feature.icon}</div>
                <span className="text-blue-600 font-medium">{feature.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
  {/* Offerings Section */}
  <Suspense>
  <div className="container">
         <Boxcontainer  heading= "What we Offer"
            para= "We offer a full suite of communication APIs designed to connect businesses with customers. Our services include:"
            carddata={offers}>

            </Boxcontainer>
        </div>
  </Suspense>
        
<div className="container">
<h2 className="text-3xl font-bold text-primery mb-4">Future of Omni-Channel Communications</h2>
        <div className="space-y-4  leading-relaxed">
          {futureContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

</div>
<div className="container grid md:grid-cols-2 gap-6">
<div className="bg-[#f8f8f8] p-6 rounded-xl flex flex-col items-center">
  <img src={missionimg}  loading="lazy" height={20} width={60}></img>
  <h3 className="text-primery text-xl font-medium ">Our Mission</h3>
  <p className="text-center">Provide SaaS platforms to enable enterprises to create differentiated mobile engagement for their customers. </p>
</div>
<div  className="bg-[#f8f8f8] p-6  rounded-xl flex flex-col items-center">
  <img src={visionimg} loading="lazy" height={20} width={60}></img>
  <h3 className="text-primery  text-xl font-medium">Our Vision</h3>
  <p className="text-center">To enable enterprises to provide a connected, secure, and delightful user experience to their customers. </p>
</div>
</div>
 

  
 </section>

</>
  );
};

export default About;
