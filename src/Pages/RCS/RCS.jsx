import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import { CommonHeading } from '../../CommonComponent/CommonHeading';
import Brandsection from "../../CommonComponent/Brandsection";
import FAQ from "../../CommonComponent/FAQ";
import { rcsbox,rcsziczac,RCSFAQ } from '../../Constant/RCSdata';
import { Brandimage2 } from '../../Constant/Homedata';
import sms_hero from "../../assets/RCS-20241116T061300Z-001/RCS/Lottie/RCS-Hero.json";

import priceboximg from "../../assets/RCS-20241116T061300Z-001/RCS/Lottie/RCS.json";


const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "RCS Messaging",
      heading: "Create memorable conversational experiences with RCS Business Messaging",
      content: "Interact with clients using branded conversational messaging on RCS.",
      secheading:"Rich Communication Services | RCS Chat | Google Verified Messages | Verified SMS  ",
      lottie: "use",
      img: sms_hero,
    },
  },
    {
          custom: () => (
            <div className="p-7 bg-tertiary ">
              <CommonHeading
                h="What is RCS Business Messaging, and why should you use it?"
                p="RCS Business Messaging (RBM) is a communication tool that allows businesses to connect with their customers using the Rich Communication Services (RCS) protocol."
              />
              <div className='grid md:grid-cols-3'>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-3xl text-primery font-semibold'>115%</h2>
                  <p>campaign revenue growth</p>
                </div>
    
                <div className='flex flex-col gap-3'>
                  <h2 className='text-3xl text-primery font-semibold'>130%</h2>
                  <p>higher CTR</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-3xl text-primery font-semibold'>74%</h2>
                  <p>growth of RCS Business Messaging users</p>
                </div>
                
              </div>
         
            </div>
          )},

          {
            component: Boxcontainer,
            props: {
              heading: "Discover key features of RCS for businesses",
              para: "Enhance your interaction using RCS's advanced communication tools. Explore each section to discover the essential features of RCS A2P messaging.",
              carddata:rcsbox ,
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
            component:CommonHeading,
            props:{
                h:"Message to impress with RCS",
                p:"RCS was designed to enhance traditional SMS messaging by adding interactive features and branding opportunities. It helps build more engaging customer journeys and strengthen customer relationships through rich, branded two-way conversations."
            }
          },
          {
            component: LeftRightBLock,
            props: { data: rcsziczac },
          },
{
            custom: () => (
              <div className="container grid md:grid-cols-2 items-center gap-8">
                <CommonHeading
                  h="Easily integrate RCS with your existing tech stack"
                  p="We want to keep your operations running smoothly. That’s why our platform is easy to work with.Choose from a wide range of integrations to build and add on top of our RCS API, and easily configure them with your existing systems."
                />
                <Brandsection
        data={Brandimage2}
         />
              </div>
            ),
          },
   
  
 {
    component: FAQ,
    props:{data:RCSFAQ}
  },
];

const RCS = () => {
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

export default RCS;
