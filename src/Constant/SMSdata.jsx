import sms_2fa from "../assets/SMSImage/Lottie/sms_2fa.json";
import  transectional_sms from "../assets/SMSImage/Lottie/transactional_sms.json";
import  sms_marketing from "../assets/SMSImage/Lottie/sms_marketing.json";
import email_to_sms from "../assets/SMSImage/Lottie/email_to_sms.json";
import doublewaylogo from "../assets/SMSImage/Lottie/2_way_messaging.json"
import longcode_service from "../assets/SMSImage/Lottie/longcode_service.json"
// SMSAPI box
import colletctdataimg from "../assets/SMSImage/IMAGE/Collect data, analyse insights and take action.webp"
import powerupimg from "../assets/SMSImage/IMAGE/Power Up Your Customer Engagement with Smart SMS Solutions.webp"
import reliableimg from "../assets/SMSImage/IMAGE/Reliable, Low-Latency Messaging for Global Reach with Seamless Fallback Mechanism.webp"
import scaleengageimg from "../assets/SMSImage/IMAGE/Scale Engagement with Secure, Compliant 2-Way SMS Conversations.webp"
//sms authenticationBOx 
import sms_Otp from "../assets/SMSImage/IMAGE/otp.svg"
import report from "../assets/SMSImage/IMAGE/report.svg"
import route from "../assets/SMSImage/IMAGE/route.svg"
import time from "../assets/SMSImage/IMAGE/time.svg"
import user from "../assets/SMSImage/IMAGE/user.svg"
import validity from "../assets/SMSImage/IMAGE/validity.svg"
// Two factor Authentication 
import loginimg from "../assets/SMSImage/IMAGE/Login.webp"
import authenticationimg from "../assets/SMSImage/IMAGE/Authentication.webp";
import twofA from "../assets/SMSImage/IMAGE/2FA.webp";
import otp from "../assets/SMSImage/IMAGE/OTP.webp"
// International sms
import easy from "../assets/SMSImage/IMAGE/easy.svg"
import engage from "../assets/SMSImage/IMAGE/engage.svg"
import enhance from "../assets/SMSImage/IMAGE/enhance.svg"
import integration from "../assets/SMSImage/IMAGE/integration.svg"
import payment from "../assets/SMSImage/IMAGE/payment.svg"
import secure from "../assets/SMSImage/IMAGE/secure.svg"
// 
import savetime from "../assets/SMSImage/IMAGE/Save Time with Our Business Process Streamlining Software.webp"
import comprehensive from "../assets/SMSImage/IMAGE/Comprehensive Technology Suite for Efficient Operations.webp"
import connect from "../assets/SMSImage/IMAGE/Collect data, analyse insights and take action.webp"
// Bulk sms
import double from "../assets/SMSImage/IMAGE/doubleWayMessage.svg"
import emailToSms from "../assets/SMSImage/IMAGE/emailToSms.svg"
import longService from "../assets/SMSImage/IMAGE/longService.svg"
import marketSms from "../assets/SMSImage/IMAGE/marketSms.svg"
import sms2Fa from "../assets/SMSImage/IMAGE/sms2Fa.svg"
import smstrans from "../assets/SMSImage/IMAGE/smsTrans.svg"
// Data of SMSAPI Boxcontainer
export const SMSAPIBox=[
    {
    id:1,
     img: sms_2fa,
      title: "SMS 2FA",
      content:
        "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
      isImageOrLottie:true
      },
      {
        id:2,
        img: transectional_sms,
         title: "Transactional SMS",
         content:
           "Set up automated SMS flows, like welcome messages, order confirmations, updates, and more.",
        isImageOrLottie:true
          },
         {
          id:3,
          img: sms_marketing,
           title: "SMS marketing",
           content:
             "Enhance your conversion rates significantly by implementing personalized, automated SMS marketing campaigns.",
             isImageOrLottie:true
            },
      {
        id:4,
        img: longcode_service,
         title: "Longcode Services",
         content:
           "Boost your brand’s visibility and elevate customer engagement with dedicated longcode solutions.",
           isImageOrLottie:true
          },
         {
          id:5,
          img:email_to_sms,
           title: "Email-to-SMS Solution",
           content:
             "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
             isImageOrLottie:true
            },
       
        {
          id:6,
          img: doublewaylogo,
           title: "2-Way Messaging",
           content:
           "Accelerate communication and enable real-time customer interaction with seamless 2-way messaging solutions.",
           isImageOrLottie:true
          },
  
  
  ]


  export const SMSAPIleftrightcontent = [
    {
      img:powerupimg,
      title: "Power Up Your Customer Engagement with Smart SMS Solutions",
      content:
        "Enhance customer experience with personalized SMS campaigns and real-time alerts. Reach wide audiences with targeted bulk messaging for launches, offers, deals, and codes. Ensure reliable delivery of important messages using our advanced system. Improve SMS marketing with trackable URL links for optimized content and performance tracking",
      contentOnLeft:true
    },
    {
      img:reliableimg,
      title:
        "Reliable, Low-Latency Messaging for Global Reach with Seamless Fallback Mechanism",
      content:
        "Achieve timely global communication with our enterprise-grade platform, featuring low-latency delivery and automatic fallback to voice and WhatsApp. Monitor message delivery in real time with a live dashboard, and send and receive messages in various languages, thanks to Unicode support for regional characters.",
      contentOnLeft:false
      },
    {
      img:colletctdataimg,
      title: "Collect data, analyse insights and take action",
      content:
        "Keep an eye on how well your SMS campaigns are doing. By looking closely at the results, you can see which strategies work best for your audience. This knowledge helps you create better campaigns that boost engagement and conversion rates.",
      contentOnLeft:true
      },
    {
      img:scaleengageimg,
      title: "Scale Engagement with Secure, Compliant 2-Way SMS Conversations",
      content:
        "Utilize two-way SMS to actively encourage engagement and collect valuable feedback or insights from customers across the globe.",
      contentOnLeft:false
      },
  ];

  export const SMSAPIScroll = [
    {
      title: "Deliverability & Performance",
      content:
        "Look for a provider experienced in handling high message volumes, ideally with a cloud-based infrastructure or a strong presence in the CPaaS space. If a provider isn't transparent about their delivery rates, it could signal unreliable message delivery, which is a red flag.",
    },
    {
      title: "Scalability",
      content:
        "Choose a provider that can handle your current message volume and scale as your business grows. A provider that compromises performance for scalability may not support your long-term needs, making them a less ideal choice.",
    },
    {
      title: "Security",
      content:
        "Compliance with regulations like the EU’s GDPR is essential for any SMS service provider. Ensure their security measures meet industry standards, such as encryption, two-factor authentication, and secure data storage. A history of data breaches is a warning sign of inadequate security practices.",
    },
    {
      title: "Compliance",
      content:
        "When reaching out to a global audience, ensure your content complies with local SMS laws. Opt for a provider that understands SMS compliance and has experience in navigating international regulations, especially if they have offices in multiple countries.",
    },
    {
      title: "Coverage & Connections",
      content:
        "For a global customer base, choose an SMS provider with broad geographic coverage. Check their partnerships with local carriers. Providers with more direct connections to mobile network operators worldwide will ensure better reach and reliability.",
    },
    {
      title: "Routing",
      content:
        "Effective message routing ensures timely delivery. The optimal routing path depends on factors such as the message type (e.g., SMS OTPs need faster routes than promotional messages), customer location, and network congestion. Providers should also have backup routes to maintain reliability during carrier issues.",
    },
    {
      title: "Integrations",
      content:
        "Ensure the SMS provider integrates seamlessly with your existing systems, such as CRM, marketing automation, and customer support platforms. Compatibility is key to maintaining a smooth workflow without technical disruptions.",
    },
    {
      title: "API",
      content:
        "An easy-to-integrate SMS API is crucial. Providers offering comprehensive SDKs, detailed documentation, and active support forums show a commitment to helping your development team maximize their services' potential.",
    },
    {
      title: "Message Types & Features",
      content:
        "Understand the types of messages each provider supports and their customization options. Features like A/B testing, personalization, delivery tracking, and scheduling can enhance audience engagement and campaign effectiveness.",
    },
    {
      title: "Analytics & Reporting",
      content:
        "Choose a provider that offers robust analytics and reporting tools. Insights into delivery rates, customer engagement, and campaign performance can help optimize your SMS strategy.",
    },
    {
      title: "Customer Support",
      content:
        "Opt for a provider with responsive customer support, ideally with global offices for local language assistance and expertise in regulatory compliance.",
    },
    {
      title: "Trial & Testing",
      content:
        "Look for a provider that offers a demo or trial period. This allows you to evaluate their services before committing. Providers confident in their offerings will often provide free trials to help you assess compatibility and key features.",
    },
  ]
  export const SMSAPIFAQ =[
    {
      id:"hFAQ1",
      que:"How much does an SMS service cost?",
      ans:"The price of an SMS service can vary based on different factors like the number of messages, destination country, sender type, and use case. You can join our platform for free and add funds to your account with a pay-as-you-go approach. If you want more info on SMS pricing, just reach out to our team."
    },
    {
      id:"hFAQ2",
      que:"How can I send bulk SMS at once?",
      ans:"You can send bulk SMS via our web platform or API. When sending over our web platform, you will need to add your list of recipients, select the type of sender, craft your message, and send away. You can test it out by signing up for free."
    },
    {
      id:"hFAQ3",
      que:"How do I automate SMS sending?",
      ans:"When sending with Connex Better, you can automate using our Flow solution, or you can use our SMS API. To get started easily, you can use our most basic API request which only requires three parameters to send a message."
    },
    {
      id:"hFAQ4",
      que:"What phone numbers can I use for business texting?",
      ans:"Available business numbers depend on the country you want to send your messages in. You can learn more details about the SMS conditions in each country here."
    },
   
  ]
  export const SMSAPIDLT=[
    {
      id:"hFAQ1",
      que:"What Is DLT Registration?",
      ans:"To ensure compliance and secure message delivery, businesses are required to complete DLT registration before sending commercial messages. DLT, or Distributed Ledger Technology, is a decentralized database system that securely records transactions across multiple nodes without the need for a central authority.This process provides transparency, prevents fraud, and enhances the security of communication channels."
    },
    {
      id:"hFAQ2",
      que:"Why Is DLT Registration Important?",
      ans:"DLT registration is mandatory for businesses to legally send promotional, transactional, and OTP messages in compliance with telecom regulations.It helps in preventing spam and ensuring that only registered entities can send commercial messages,safeguarding customer trust and reducing message fraud."
    },
    {
      id:"hFAQ3",
      que:"How To Complete DLT Registration?",
      ans:"To get started businesses must register with a telecom operators DLT platform by submitting their business details and message templates. Once registered, you'll be able to send bulk SMS to your customers through a secure and compliant system.As o bonus, We offers free SMS credits for businesses that complete their DLT registration, helping you kick-start your campaigns right away."
    },
  ]
  

  // Two Factor Authentication start====================================
  export const TwoFactorAuthenticationBox=[
    {
      id:1,
      img: time,
       title: "Time Guarantee",
       content:
         "Ensure 99% OTP SMS delivery in 5-10 seconds for secure logins. Enhance user experience with reliable authentication!",
    },
    {
      id:2,
      img:user,
       title: "User Authentication",
       content:
         "Verify identities and reduce impersonation risks with 2FA, ensuring enhanced security for your applications.",
    },
    {
      id:3,
      img: route,
       title: "Dedicated Routes",
       content:
         "Send OTPs securely with dedicated carrier routing for fast, reliable delivery, enhancing user experience and security.",
    },
    {
      id:4,
      img: sms_Otp,
       title: "OTP Length​",
       content:
         "Customize OTP lengths with options for 4-digit or 6-digit codes, tailored to suit your security and user preferences.",
    },
    {
      id:5,
      img: report,
       title: "Reports & Analytics",
       content:
         "Intuitive dashboards for easy monitoring, management, and reporting to boost efficiency and decision-making.",
    },
    {
      id:6,
      img: validity,
       title: "Validity Period",
       content:
         "Customize OTP validity with options for seconds, minutes, or hours, ensuring security for your authentication.",
    },
  ]

  export const TwoFactorAuthenticationziczac=[
    {
      img: loginimg,
      title: "Login",
      content:
        "A customer securely logs in by entering their username and password, ensuring authorized access to their account and services",
      contentOnLeft:true
    },
    {
      img:twofA,
      title: "2FA",
      content:
        "The customer receives a 2FA SMS containing their unique one-time pin (OTP), providing an additional layer of security for the login process.",
      contentOnLeft:false
    },
    {
      img: otp,
      title: "OTP",
      content:
        "The user enters the OTP into the login page, completing the authentication process and gaining secure access to their account.",
      contentOnLeft:true
    },
    {
      img: authenticationimg,
      title: "Authentication",
      content:
        "They have successfully verified their identity, completing the authentication process and gaining secure access to their account.",
      contentOnLeft:false
    },
  ]

  export const TwoFactorAuthenticationScroll = [
    {
      title: "All you need is your phone",
      content:
        "There is no additional hardware or download requirements needed for our SMS verification service, making it a user-friendly option for authentication.",
    },
    {
      title: "Available on any mobile device",
      content:
        "No matter the phone, SMS is available on every device. This ensures that every customer can access easy-to-use security measures to reduce the risk of data being compromised.",
    },
    {
      title: "Reach anyone, anywhere, anytime",
      content:
        "Users worldwide can be verified with SMS 2FA without any mobile data or WiFi required. Even if you use another channel for authentication, adding SMS as a fallback channel will ensure your customers always get their security messages on time.",
    },
    
  ]
//  TwoFactorFAQ
export const TwoFactorAuthenticationFAQ =[
  {
    id:"hFAQ1",
    que:"What is OTP Authentication?",
    ans:"OTP Authentication, also known as Two-Factor Authentication (2FA), is a security measure used to verify the identity of a user by requiring them to provide a one-time passcode in addition to their username and password. This passcode is usually sent to the user’s mobile phone via SMS or generated by an authenticator app."
  },
  {
    id:"hFAQ2",
    que:"How does OTP verification work?",
    ans:"OTP verification works by requiring the user to provide a unique passcode that is generated or sent to their mobile device. This passcode is usually valid for a limited time and can only be used once. The user enters the passcode into the system, which then verifies it against the stored passcode. If the passcodes match, the user is granted access to the system."
  },
  {
    id:"hFAQ3",
    que:"What is OTP verification service?",
    ans:"OTP verification service is a service provided by companies like Connex Better that allows businesses to add an extra layer of security to their systems by implementing OTP authentication. The service includes generating and sending the OTP to the user’s mobile phone, as well as validating the passcode entered by the user."
  },
 
]


  // International
  export const internationalSmsBox=[
    {
      id:1,
      img: enhance,
      title: "Enhance customer loyalty and trust",
      content:
        "Build strong relationships with secure, timely communications through our international SMS API, fostering customer trust and loyalty.",
    
    },
    {
      id:2,
      img: engage,
      title: "Engage with your subscribers",
      content:
        "Connect with your audience globally using personalized SMS, boosting engagement and interaction with real-time updates and promotions.",
      
    },
    {
      id:3,
      img: easy,
      title: "Easy & Reliable Customer Feedback",
      content:
        "Collect valuable customer insights through quick and reliable SMS feedback, streamlining responses and improving service quality.",
      
    },
    {
      id:4,
      img: secure,
      title: "Secure and scalable",
      content:
        "Ensure the security and scalability of your communications with our robust international SMS API, handling high volumes securely and efficiently.",
      
    },
    {
      id:5,
      img: payment,
      title: "Payment Collections",
      content:
        "Simplify payment reminders and collections with our SMS API, ensuring timely payments and improving cash flow through easy customer communication.",
      
    },
    {
      id:6,
      img: integration,
      title: "Integrations",
      content:
        "Seamlessly integrate our international SMS API with your existing platforms, enhancing communication workflows for smooth and efficient operations.",
      
    },
  
  
  ]

export const internationalSmsziczac=[
    {
      img:savetime,
      title: "Save Time with Our Business Process Streamlining Software",
      content:
        "Streamline your business operations and save time with our software, designed to optimize team management and improve efficiency for businesses of any size.",
      contentOnLeft:true
    },
    {
      img: comprehensive,
      title: "Comprehensive Technology Suite for Efficient Operations",
      content:
        "Our robust technology suite provides all the tools you need to manage your team, operations, and processes seamlessly, helping you scale your business effectively.",
      contentOnLeft:false
    },
    {
      img:connect,
      title: "Connect Instantly with Customers, Employees, and Partners",
      content:
        "Leverage our world-class network to reach customers, employees, and partners effortlessly with just one click, ensuring quick and reliable communication across your business ecosystem.",
      contentOnLeft:true
    }
  ]

  // InternationalScroll
  export const InternationalSMSScroll = [
    {
      title: "Optimize Operational Efficiency",
      content:
        "Streamline your SMS campaigns to reduce overhead and maximize results, ensuring cost-effective communication.",
    },
    {
      title: "Optimize Your Message Length",
      content:
        "SMS charges are often based on message length. Keep messages concise to lower costs without compromising the content’s impact.",
    },
    {
      title: "Personalized Customer Experiences",
      content:
        "Segment your audience and send targeted messages to the right groups, ensuring you’re not wasting SMS credits on uninterested users.",
    },
    {
      title: "Cost-Effective Communication at Scale",
      content:
        "Scale your messaging efforts while monitoring campaign performance to track success and reduce unnecessary expenses.",
    },
    
  ]

// 
export const InternationalSMSFAQ =[
  {
    id:"hFAQ1",
    que:"How To Send Bulk SMS To International Numbers?",
    ans:"We offers 1000+ International Connections. We deliver to more than 225 countries in a matter of second."
  },
  {
    id:"hFAQ2",
    que:"Can I send SMS from any country?",
    ans:"Yes you can access the UI or the API provided by Connex Better SMS to trigger SMS from any country to any country. You will be charged based on the country of destination."
  },
  {
    id:"hFAQ3",
    que:"Can I use my Own Sender id?",
    ans:"If the in country norms will permit, you can use your own sender id by your own choice else the traffic will pass through the default permittable sender id’s."
  },
 
]

  // Bulk sms=========================
  export const bulkSmsBox=[
    {
      id: 1,
      img: sms2Fa,
      title: "SMS 2FA",
      content:
        "Keep your customers' accounts safe with SMS 2FA (two-factor authentication) or SMS OTP to enhance security.",
    },
    {
      id: 2,
      img: smstrans,
      title: "Transactional SMS",
      content:
        "Set up automated SMS flows, like welcome messages, order confirmations, updates, and more.",
    },
    {
      id: 3,
      img: marketSms,
      title: "SMS marketing",
      content:
        "Enhance your conversion rates significantly by implementing personalized, automated SMS marketing campaigns.",
    },
    {
      id: 4,
      img: longService,
      title: "Longcode Services",
      content:
        "Boost your brand’s visibility and elevate customer engagement with dedicated longcode solutions.",
    },
    {
      id: 5,
      img: emailToSms,
      title: "Email-to-SMS Solution",
      content:
        "Utilize Email-to-SMS for seamless communication, sending emails directly as SMS to specific mobile numbers for flexibility and ease.",
    },
    {
      id: 6,
      img: double,
      title: "2-Way Messaging",
      content:
        "Accelerate communication and enable real-time customer interaction with seamless 2-way messaging solutions.",
    },
  ]
  
  export const bulkSmsziczac=[
    {
      img:powerupimg ,
      title: "Power Up Your Customer Engagement with Smart SMS Solutions",
      content:
        "Enhance customer experience with personalized SMS campaigns and real-time alerts. Reach wide audiences with targeted bulk messaging for launches, offers, deals, and codes. Ensure reliable delivery of important messages using our advanced system. Improve SMS marketing with trackable URL links for optimized content and performance tracking.",
      contentOnLeft:true
    },
    {
      img: reliableimg,
      title: "Reliable, Low-Latency Messaging for Global Reach with Seamless Fallback Mechanism",
      content:
        "Achieve timely global communication with our enterprise-grade platform, featuring low-latency delivery and automatic fallback to voice and WhatsApp. Monitor message delivery in real time with a live dashboard, and send and receive messages in various languages, thanks to Unicode support for regional characters.",
      contentOnLeft:false
    },
    {
      img: colletctdataimg,
      title: "Collect data, analyse insights and take action",
      content:
        "Keep an eye on how well your SMS campaigns are doing. By looking closely at the results, you can see which strategies work best for your audience. This knowledge helps you create better campaigns that boost engagement and conversion rates.",
      contentOnLeft:true
    },
    {
      img:scaleengageimg,
      title: "Scale Engagement with Secure, Compliant 2-Way SMS Conversations",
      content:
        "Utilize two-way SMS to actively encourage engagement and collect valuable feedback or insights from customers across the globe.",
      contentOnLeft:false
    },
  ]

  // bulksms scroll
  export const BulkSMSScroll = [
    {
      title: "Instant Engagement with Bulk SMS Campaigns",
      content:
        "Our bulk SMS campaigns enable you to send mass text messages straight to your audience, ensuring immediate engagement. With the majority of messages being opened within 90 seconds and an outstanding 98% open rate, our bulk SMS platforms ensure your content gets noticed swiftly.",
    },
    {
      title: "Optimize Your Message LengthSeamless SMS Solutions for Maximum Impact",
      content:
        "Whether you’re utilizing our SMS API for smooth integration or tapping into our Enterprise SMS gateway API for large-scale messaging, we offer the tools and expertise to make your campaigns successful. As a top-tier bulk SMS service provider, we deliver dependable SMS solutions aimed at boosting engagement and achieving results.",
    },
  
    
  ]

// Bulksms FAQ
export const BulkSMSFAQ=[
    {
      id:"hFAQ1",
      que:"What is the use of sending Bulk SMS?",
      ans:"The use of sending Bulk SMS includes:Marketing and advertising campaigns,Promotions and discounts,Appointment reminders,Order confirmations and updates,Emergency alerts and notifications,Event invitations and reminders,"
    },
    {
      id:"hFAQ2",
      que:"What kind of customer support is available and what are the hours of availability?",
      ans:"connexbetter has 24*7 Customer support facility. User can connect with support team any time or they can drop a mail on support@connexbetter.com"
    },
    {
      id:"hFAQ3",
      que:"Can Bulk SMS be customized?",
      ans:"Yes. The number of messages has the provision to personalize as per the choice to include the customer’s name, order status and even a specific landing page on a website."
    },
  
  ]