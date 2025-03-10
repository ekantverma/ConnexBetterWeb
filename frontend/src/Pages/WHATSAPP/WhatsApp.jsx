import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import leftimagerightcontent from '../../CommonComponent/Leftimagerightcontent';
import { CommonHeading } from '../../CommonComponent/CommonHeading';
import Brandsection from "../../CommonComponent/Brandsection";
import { Brandimage2 } from '../../Constant/Homedata';
import FAQ from "../../CommonComponent/FAQ";
import { whatsAppBoost, whatsAppBox,whatsAppziczac,WhatsAppFAQ} from '../../Constant/WhatsAppdata';
import smsapicoding from "../../assets/SMSImage/IMAGE/SMSAPICoding.svg";
import sms_hero from "../../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Lottie/Whatsapp-API-Hero (3).json";

import priceboximg from "../../assets/WhatsApp Business API-20241116T100912Z-001/WhatsApp Business API/Lottie/whatsapp-pricing.json";


const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Best WhatsApp Business API Provider In India",
      heading: "Strengthen customer engagement with seamless WhatsApp Business API.",
      content: "Move beyond one-way messaging. Engage customers interactively throughout their lifecycle for stronger connections and better results.",
      secheading:" WhatsApp Broadcast | WhatsApp Chatbot | Bulk WhatsApp Sender | Bulk WhatsApp Campaign ",
      lottie: "use",
      img: sms_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "Benefits of WhatsApp Business Platform",
      para: "",
      carddata:whatsAppBox ,
    },
  },

       {
            component: LeftRightBLock,
            props: { data: whatsAppziczac },
          },

    {
          custom: () =>
            <div className='container grid gap-5 md:grid-cols-3'>
      {
                whatsAppBoost.map((ele)=>
                    <div className='flex flex-col gap-6' key={ele.id}>
                    <img src={ele.img} alt='image' loading='lazy' className='w-full'></img>
                    <div className='text-xl'>{ele.title}</div>
                    <div className='text-xl'>{ele.content}</div>
                  
                    </div>

                )
            }
            </div>
           
          
        },
        {
            component:leftimagerightcontent,
            props: {
              heading: "Be up and running in no time",
              para: "Build the experiences your customers want with our flexible API stack. Integrate their favorite channels with your business workflow to elevate their customer journey.",
              img: smsapicoding,
            },
          },
         


          {
            component: ContentImageBlock,
            props: {
              subheading: "Flexible pricing models",
              heading: "Choose a pricing model that best suits your needs.",
            
              content: "Achieve the highest SMS delivery rates worldwide using a reliable A2P SMS service from Connex Better.",
              lottie: "use",
              img: priceboximg,
            },
          },


         
     
{
            custom: () => (
              <div className="container grid md:grid-cols-2 items-center gap-8">
                <CommonHeading
                  h="Easily integrate WhatsApp with your existing tech stack"
                  p="We want to keep your operations running smoothly. That’s why our platform is easy to work with.Choose from a wide range of integrations to build and add on top of our WhatsApp API, and easily configure them with your existing systems."
                />
                 <Brandsection
        data={Brandimage2}
         />
              </div>
            ),
          },
   
  
 {
    component: FAQ,
    props:{data:WhatsAppFAQ}
  },
];

const WhatsApp= () => {
  return (
    <section>
      {sections.map((section, index) =>
        section.custom ? (
          <React.Fragment key={index}>{section.custom()}</React.Fragment>
        ) : (
          <div key={index} className="container">
            <section.component {...section.props} />
          </div>
        )
      )}
    </section>
  );
};

export default WhatsApp;
