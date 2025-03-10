import media from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/media.json"
import brand from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/brand.json"
import action from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/action.json"
import corousels from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/Carousels.json"
import card from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/Cards.json"
import suggested from "../assets/RCS-20241116T061300Z-001/RCS/Lottie/suggested.json"

import visually from "../assets/RCS-20241116T061300Z-001/RCS/Images/visually.webp";
import deploy from "../assets/RCS-20241116T061300Z-001/RCS/Images/deploy.webp";
import reliable from "../assets/RCS-20241116T061300Z-001/RCS/Images/reliable.webp";
import lowLatency from "../assets/RCS-20241116T061300Z-001/RCS/Images/lowLatency.webp";
import boost from "../assets/RCS-20241116T061300Z-001/RCS/Images/boost.webp";

export const rcsbox = [
    {
      id:1,
      img: media,
      title: "Rich Media",
      content:
        "Share media like images and videos, allowing customers to review and choose multiple products or services.",
        isImageOrLottie:true
      },
    {
      id: 2,
      img: brand,
      title: "Branded communications",
      content:
        "Boost your brand with captivating and engaging visuals. This enhances recognition and connects deeply with users.",
        isImageOrLottie:true
      },
    {
      id: 3,
      img:action,
      title: "Actionable Buttons",
      content:
        "Provide actionable buttons to easily enable purchases, product/services options, polling, and feedback.",
        isImageOrLottie:true
      },
    {
      id: 4,
      img: corousels,
      title: "Carousels",
      content:
        "Combine up to 10 rich cards into an interactive unit for customers to swipe through. A small step in selecting the best offer.",
        isImageOrLottie:true
      },
    {
      id: 5,
      img:card ,
      title: "Cards",
      content:
        "Engage in meaningful conversations with customers by utilizing rich, interactive content for two-way communication.",
        isImageOrLottie:true
      },
    {
      id:6,
      img: suggested,
      title: "Suggested replies",
      content:
        "Provide suggested replies that can effectively accelerate customer engagements quickly and efficiently.",
        isImageOrLottie:true
      },
  ];

  export const rcsziczac=[
  
    {
      id:1,
      img:visually ,
      title: "Visually showcase feature products and services",
      content:
        "Ensure that your messages resonate with your brand identity by incorporating RCS-enabled brand elements. This includes prominently displaying your logo, brand name, and color palette on the screen. By doing so, you create a cohesive visual experience that reinforces your brand's presence and makes your communications instantly recognizable to your audience.",
      contentOnLeft:true
    },
    {
      id:2,
      img: deploy,
      title: "Deploy RCS campaigns with precision",
      content:
        "unch campaigns across iOS and Android devices from a single platform. Schedule messages to reach customers at optimal times. Manage multilingual content easily for global campaigns. Track performance with granular reporting on message engagement and journey progression.",
      contentOnLeft:false
    },
    {
      id:3,
      img: reliable,
      title: "Reliable Messaging with Seamless Fallback Mechanism",
      content:
        "Ensure your messages always reach your audience with our advanced fallback capabilities. When RCS messages encounter delivery issues, they automatically switch to SMS, WhatsApp, or even voice calls, guaranteeing communication continuity",
      contentOnLeft:true
    },
    {
      id:4,
      img: lowLatency,
      title: "Reliable, Low-Latency Messaging for Global Reach Personalize your offers and increase revenue",
      content:
        "Understand your customers’ interests, identify their needs, and personalize your communication, building lasting relationships that drive loyalty.",
      contentOnLeft:false
    },
    {
      id:5,
      img: boost,
      title: "Boost response rates effectively with clickable buttons",
      content:
        "Allow customers to respond simply by clicking a button embedded within the conversation. Make it easier for them to reply and improve your interactions.",
      contentOnLeft:true
    },
  
  ]
  export const RCSFAQ =[
    {
      id:"hFAQ1",
      que:"What is RCS Business Messaging?",
      ans:"Businesses can send RCS messages to customers through their messaging platform or by partnering with a Mobile Network Operator (MNO) or Communication Platform as a Service (CPaaS) provider. These providers have access to RCS infrastructure and can facilitate the delivery of RCS messages on behalf of businesses."
    },
    {
      id:"hFAQ2",
      que:"How is RCS Business Messaging different from SMS?",
      ans:"RCS Business Messaging offers an upgraded experience compared to traditional SMS. It supports rich media content like images, videos, interactive buttons, suggested replies, and carousels. It allows businesses to create more engaging and interactive messages, providing a better user experience for customers."
    },
    {
      id:"hFAQ3",
      que:"What are the benefits of RCS Business Messaging?",
      ans:"RCS Business Messaging provides numerous advantages for companies, including:– A better customer experience featuring rich media and interactive components.– Strengthened branding with the inclusion of business logos and color schemes.– Enhanced engagement through suggested responses and actionable buttons.– Capability to monitor message delivery and read confirmations.– Smooth integration with various business systems and APIs.– Customized and targeted messaging tailored to customer preferences."
    },
    {
      id:"hFAQ4",
      que:"How can businesses send RCS messages to their customers?",
      ans:"Available business numbers depend on the country you want to send your messages in. You can learn more details about the SMS conditions in each country here."
    },

   {
      id:"hFAQ5",
      que:"What kinds of content can I include in RCS messages?",
      ans:"With our RCS, you can include images, GIFs, videos, carousels, buttons, and even branding elements like logos. This allows you to create engaging messages that go beyond plain text, offering a more immersive experience for your audience."
    },
    
   
  ]