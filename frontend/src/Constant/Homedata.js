import rcsicon from "../assets/HomeImage/IMAGE/RcsSVG.svg";
import whatsappicon from "../assets/HomeImage/IMAGE/WhatsappSVG.svg";
import emailicon from "../assets/HomeImage/IMAGE/EmailSVG.svg";
import voiceicon from "../assets/HomeImage/IMAGE/VoiceSVG.svg";
import smsicon from "../assets/HomeImage/IMAGE/SmsSVG.svg"
import aiagent from "../assets/HomeImage/IMAGE/hugeicons_ai-network.svg"
import mainsmsapiimg from "../assets/HomeImage/IMAGE/smsapiimg.png"
import whatsappapiimg from "../assets/HomeImage/IMAGE/whatsapapiimg.png"
import voiceapiimg from "../assets/HomeImage/IMAGE/voiceapiimg.png";
import mailapiimg from "../assets/HomeImage/IMAGE/mailapiimg.png"
import rcs_img from "../assets/HomeImage/IMAGE/rcs-img.png";
import aiagent_img from "../assets/HomeImage/IMAGE/AI-agents-img.png"
// image of why choose 
import savingicon from "../assets/HomeImage/IMAGE/SavingSVG.svg";
import benifiticon from "../assets/HomeImage/IMAGE/verticleLine.svg";
import needicon from "../assets/HomeImage/IMAGE/boxPattern.svg";
import featureicon from "../assets/HomeImage/IMAGE/concentricPoint.svg";
import onboarding from "../assets/HomeImage/IMAGE/handShake.svg";
import supporticon from "../assets/HomeImage/IMAGE/tapeRecord.svg";
// image of Boost Revenue
import marketingicon from "../assets/HomeImage/IMAGE/marketingAndSales.svg";
import engagementicon from "../assets/HomeImage/IMAGE/engagement.svg";
import customericon from "../assets/HomeImage/IMAGE/customer.svg";
import operationicon from "../assets/HomeImage/IMAGE/operations.svg";
// brand images 
import brand1 from "../assets/BrandImage/IMAGE/image 24-C-gwSuE0.png"
import brand2 from "../assets/BrandImage/IMAGE/image 27 (1)-CCWWWA6w.png"
import brand3 from "../assets/BrandImage/IMAGE/image 30-CDat-g8k.png";
import brand4 from "../assets/BrandImage/IMAGE/image 31-DKM9VzEq.png";
import brand5 from "../assets/BrandImage/IMAGE/image-B6JH64Ll.png"
import kalranaimage from "../assets/BrandImage/IMAGE/Kalrana.svg"
import brand11 from "../assets/BrandImage/IMAGE/trustly-logo.png"
import brand7 from "../assets/BrandImage/IMAGE/WhatsApp Image 2025-01-16 at 9.40.41 PM-BC2EqwnQ.jpeg";
import firstcry from "../assets/BrandImage/IMAGE/FirstCry_logo-CWM1rxGf.png";
import brand9 from "../assets/BrandImage/IMAGE/WhatsApp Image 2025-01-16 at 10.31.39 PM-DEMz07jV.jpeg"
// // import brand10 from "../assets/BrandImage/IMAGE/WhatsApp Image 2025-01-16 at 10.31.39 PM (2).jpeg";
// import brand11 from "../assets/BrandImage/IMAGE/image.png"
import brand12 from "../assets/BrandImage/IMAGE/brand12-DPhgO3T1.png"
import brand13 from "../assets/BrandImage/IMAGE/brand13-BpnslQ1f.png"
import brand14 from "../assets/BrandImage/IMAGE/brand14-BzU02V1H.png"
import brand15 from "../assets/BrandImage/IMAGE/M3-m1SExOlT.png"
// 
import brands1 from "../assets/BrandImage/IMAGE/WebEngage-weaGKVny.svg"
import brands2 from "../assets/BrandImage/IMAGE/ZOHO-CIJxpshD.svg";
import brands3 from "../assets/BrandImage/IMAGE/BigCommer-D5TYPmja.svg"
import brands4 from "../assets/BrandImage/IMAGE/Hubsport.svg"
import brands5 from "../assets/BrandImage/IMAGE/SalesForce-CYdG8dnq.svg"
import brands6 from "../assets/BrandImage/IMAGE/Shopify-ua7FEKfm.svg";
import brands7 from "../assets/BrandImage/IMAGE/WhatsApp Image 2025-01-19 at 11.26.48 AM-Bg5ZGNrm.jpeg";
import brands8 from "../assets/BrandImage/IMAGE/WhatsApp Image 2025-01-19 at 11.31.10 AM (1)-CFlJTqj_.webp";
// import brands9 from "../assets/BrandImage/IMAGE/WhatsApp Image 2025-01-19 at 11.31.10 AM (1).webp";
// Blog images
import blog1img from "../assets/HomeImage/IMAGE/Best Email Marketing Tips to Increase B2B Sales in 2025.webp";
import blog2img from "../assets/HomeImage/IMAGE/How SMS APIs Simplify OTP Integration for Developers with Connex Better.webp";
import blog3img from "../assets/HomeImage/IMAGE/How to Send Bulk Messages on WhatsApp with Connex Better.webp";

export const Brandimage=[
    { "name": "Brand 1", "logo":brand1  },
    { "name": "Brand 2", "logo": brand2 },
    { "name": "Brand 3", "logo": kalranaimage},
    { "name": "Brand 4", "logo": firstcry},
    { "name": "Brand 3", "logo": brand3},
    // { "name": "Brand 5", "logo": brand3},
    { "name": "Brand 10", "logo": brand9},
    { "name": "Brand 12", "logo": brand11},
    { "name": "Brand 13", "logo": brand12},
    { "name": "Brand 14", "logo": brand13},
    { "name": "Brand 15", "logo": brand14},
    { "name": "Brand 11", "logo": brand15},
    { "name": "Brand 6", "logo": brand4},
    { "name": "Brand 7", "logo": brand5},
    { "name": "Brand 8", "logo": brand7},
  
 ]
 export const Brandimage2=[
    { "name": "Brand 1", "logo":brands1  },
    { "name": "Brand 2", "logo": brands2 },
    { "name": "Brand 5", "logo": brands3},
    { "name": "Brand 6", "logo": brands4},
    { "name": "Brand 7", "logo": brands5},
    { "name": "Brand 7", "logo": brands6},
    // { "name": "Brand 8", "logo": brands7},
    // { "name": "Brand 9", "logo": brands8},
    // { "name": "Brand 10", "logo": brands9},
    { "name": "Brand 5", "logo": brands3},
    { "name": "Brand 6", "logo": brands4},
    { "name": "Brand 7", "logo": brands5},
  ]

  export const offers = [
    {
      id: "offer-1",
      img: smsicon,
      title: "SMS API",
      content:
        "Send bulk SMS to boost customer interaction. Integrate SMS API into your applications for automated SMS and instant OTP delivery solutions.",
      showbtton:true,
      bttonlink:"/SMS" ,
      btnstyle:"change",
      mainImg : mainsmsapiimg
    },
    {
      id: "offer-2",
      img: rcsicon,
      title: "RCS",
      content:
        "Rich communication, verified sender info, better UX with rich media, boosted engagement, and real-time analytics with read receipts via Google Messages.",
        showbtton:true,
        bttonlink:"/RCS"  ,
        btnstyle:"change" ,
        mainImg: rcs_img,
    },
    {
      id: "offer-3",
      img: whatsappicon,
      title: "WhatsApp Business API",
      content:
      "Broadcast promotions, automate support, enhance engagement with chatbots and send automatic payment confirmations.",
      showbtton:true,
      bttonlink:"/WhatsApp",
      btnstyle:"change" ,
      mainImg : whatsappapiimg
    },
    {
      id: "offer-4",
      img: emailicon,
      title: "Email",
      content:
      "Enhance Engagement with Targeted Bulk Emails: High Open Rates, Real-Time Updates, and Personalized Marketing Campaigns.",
      showbtton:true,
      bttonlink:"/Email",
      btnstyle:"change" ,
      mainImg : mailapiimg
    },
    {
      id: "offer-5",
      img: voiceicon,
      title: "Voice",
      content:
        "Our IVR system offers cloud-based solutions to boost customer acquisition, enhance engagement, and improve ROI and efficiency.",
      showbtton:true,
      bttonlink:"/Voice",
      btnstyle:"change" ,
      mainImg : voiceapiimg
    },
    {
      id: "offer-6",
      img: aiagent,
      title: "AI Agent",
      content:"Generate more leads, close deals faster, and automate support with AI agents designed for your business needs.",
      showbtton:true,
      bttonlink:"/AIagent",
      btnstyle:"change",
      mainImg : aiagent_img,
    }
  ];

  export const chooseConnex = [
    {
      id: "choose-1",
      img: savingicon,
      title: "Maximize Your Savings by Cutting Costs by 27%.",
      content:
        "We optimizes spending with templates and channel selection for cost savings.",
    },
    {
      id: "choose-2",
      img: benifiticon,
      title: "Benefit from the Price Advantage: Save up to 24%.",
      content:
        "Our platform delivers immediate value with up to 24% cost reduction from day one.",
    },
    {
      id: "choose-3",
      img: needicon,
      title: "Everything You Need, All in One Place",
      content:
        "We offer comprehensive messaging solutions SMS, WhatsApp, RCS, IVR, and email.",
    },
    {
      id: "choose-4",
      img: featureicon,
      title: "More Features over any other Platform",
      content:
        "We provide a high-performance platform with advanced UI and API integrations.",
    },
    {
      id: "choose-5",
      img: onboarding,
      title: "Start Free Onboarding on Any Channel",
      content:
        "Join us for free onboarding, plus free credits and up to 9% extra savings.",
    },
    {
      id: "choose-6",
      img: supporticon,
      title: "Support You Can Count On: Always Here, 24/7.",
      content:
        "We trust our dedicated employees to provide exceptional enterprise solutions.",
    },
  ];
  
  // Home page Blog ======================
  export const Insights = [
    {
      id: "choose-2",
      img: blog2img,
      title: "How SMS APIs Simplify OTP Integration for Developers with Connex Better",
      content:
        "Integrating OTP functionality into your application is a critical step in ensuring secure authentication for your users. With Connex Better’s SMS API, developers can easily and quickly implement OTP systems.",
       date:"22 Nov 2023" ,
        buttonname:"SMS API Integration",
        bttonlink:"/SmsApiBlog" 
    },
    {
      id: "choose-3",
      img: blog3img,
      title: "How to Send Bulk Messages on WhatsApp with Connex Better",
      content:
        "Sending bulk messages on WhatsApp using Connex better is an efficient way for businesses to engage with their audience and provide relevant, timely information.",
      date:"22 Nov 2023" ,
      buttonname:"Bulk WhatsApp Marketing",
      bttonlink:"/BulkSmsBlog" 
    },
    {
      id: "choose-1",
      img: blog1img,
      title: "Best Email Marketing Tips to Increase B2B Sales in 2025",
      content:
        "Email is not just limited to sending messages to family or employees anymore. While not all of your potential customers use social media or are passionate blog readers, almost everyone uses email every day.",
  
      date:"22 Nov 2023",
      buttonname:"E-mail Marketing",
      bttonlink:"/BulkEmailBlog"

    },
   
    
  ];


  export const Boostrevenue=[
    {
      id:1,
      img:marketingicon,
      title:"Marketing & Sales",
      content:"Reach customers with personalised messages & exceed your business goals",
    },
    {
      id:2,
      img: engagementicon,
      title:"Engagement",
      content:"Build frictionless consumer journey & create memorable experiences",
    },
    {
      id:3,
      img:customericon,
      title:"Customer Support",
      content:"Automate your customer care & build engaging interactive customer journeys.",
    },
    {
      id:4,
      img:operationicon,
      title:"Operations",
      content:"Manage all your communications from one place & improve operations",
    },
  ]

  export const homeFAQ =[
    {
      id:"hFAQ1",
      que:"What is a cloud communication platform?",
      ans:"A cloud communication platform is an advanced technology that integrates real-time features like messaging, IVR, and video into your business applications. This enables seamless, contextual customer communication and provides numerous benefits for both businesses and customers."
    },
    {
      id:"hFAQ2",
      que:"What types of communication channels does a Cloud Communication Platform support?",
      ans:"Cloud Communication Platforms usually support a variety of channels, including bulk SMS, voice calls, bulk email marketing, WhatsApp CRM, WhatsApp Business API, and push notifications.We provides all these services. For more information, email us at Support@connexbetter.com"
    },
    {
      id:"hFAQ3",
      que:"What are the available pricing options for different communication services?",
      ans:"We have flexible pricing option for each of the communication. For detail pricing plan click on pricing."
    },
    {
      id:"hFAQ4",
      que:"How customer support system works?",
      ans:"We have 24/7 dedicated support system with call, WhatsApp group and email support."
    },
    {
      id:"hFAQ5",
      que:"What type of API we provide?",
      ans:"We provide ready to use rest API’s for SMS, RCS , email and Voice."
    },
    {
      id:"hFAQ6",
      que:"How are your SMS, WhatsApp API, and RCS services priced?",
      ans:"Our SMS, WhatsApp API, and RCS services are priced based on message volume, offering flexibility and affordability. Contact us to learn more about our cost-effective solutions!"
    },
    {
      id:"hFAQ7",
      que:"Is it possible to integrate your services with my current software?",
      ans:"Yes, you can! Our APIs are designed for effortless integration with CRM, ERP, and other business tools, making your communication processes smoother and more efficient."
    },
  
  
  ]