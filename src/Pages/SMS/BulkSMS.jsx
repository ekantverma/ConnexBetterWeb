import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import { CommonHeading } from '../../CommonComponent/CommonHeading';
import Scrollcomponent from '../../CommonComponent/Scrollcomponent';
import FAQ from "../../CommonComponent/FAQ";
import Agirlwithtext from '../../CommonComponent/Agirlwithtext';
import Brandsection from "../../CommonComponent/Brandsection";
import {  bulkSmsBox, bulkSmsziczac,BulkSMSFAQ,BulkSMSScroll } from '../../Constant/SMSdata';
import sms_hero from "../../assets/SMSImage/Lottie/sms_hero.json";
import CallToAction from '../../CommonComponent/CallToAction';
import bulksmsbigimg from "../../assets/SMSImage/IMAGE/Faster, Better, and most Cost-effective Bulk SMS For Free_.webp"
import { Brandimage2 } from '../../Constant/Homedata';
const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Best Bulk SMS Service Provider in India",
      heading: "Send Bulk SMS worldwide with a top-rated SMS service provider.",
      secheading:" SMS Blast | Bulk SMS Campaign | Bulk SMS Software |Bulk SMS Marketing",
      content: "Achieve the highest SMS delivery rates worldwide using a reliable A2P bulk SMS service from Connex Better",
      lottie: "use",
      img: sms_hero,
    },
  },
    {
        custom: () => (
          <div className=" p-7 bg-tertiary ">
            <CommonHeading
              h="Powerful SMS Marketing Statistics That Drive Results"
              p="Achieve Unparalleled Marketing Success with Rapid Engagement, Outstanding Open Rates, and Global Reach Through SMS"
            />
            <div className='grid md:grid-cols-3'>
              <div className='flex flex-col gap-3'>
                <h2 className='text-3xl text-primery font-semibold'>85%</h2>
                <p>Quick Engagement</p>
              </div>
  
              <div className='flex flex-col gap-3'>
                <h2 className='text-3xl text-primery font-semibold'>98%</h2>
                <p>High Open Rates</p>
              </div>
              <div className='flex flex-col gap-3'>
                <h2 className='text-3xl text-primery font-semibold'>86%</h2>
                <p>Exceptional Reach</p>
              </div>
              
            </div>
       
          </div>
        )},
  {
    component: Boxcontainer,
    props: {
      heading: "A comprehensive global SMS provider that handles everything.",
      para: "Our A2P SMS service supports diverse use cases, delivering top-notch delivery rates. It includes advanced fraud protection, personalization options, and more.",
      carddata:  bulkSmsBox,
    },
  },
 {
    component: LeftRightBLock,
    props: { data: bulkSmsziczac },
  },
  {
    component:CallToAction,
    props:{
      heading:"International Bulk SMS Reach Your Global Audience Instantly",
      content:"International SMS API | International SMS Gateway | International OTP SMS"
    }
  },
 
  {
    custom: () => (
      <div className="container grid md:grid-cols-2 items-center">
        <CommonHeading
          h="How to choose an SMS provider"
          p="Here are the key factors you should consider when choosing an SMS provider."
        />
        <Scrollcomponent data={BulkSMSScroll}/>
      </div>
    ),
  },
  {
    custom: () => (
      <div className="container grid md:grid-cols-2 items-center gap-8">
        <CommonHeading
          h="Easily integrate SMS with your existing tech stack"
          p="We want to keep your operations running smoothly. That’s why our platform is easy to work with. Choose from a wide range of integrations to build and add on top of our SMS API, and easily configure them with your existing systems."
        />
        <Brandsection
        data={Brandimage2}
         />
      </div>
    ),
  },
      {
        custom: () => (
          <div className="container flex flex-col gap-7">
          <img src={ bulksmsbigimg } alt="image of Authentication" loading='lozy'></img>
            <CommonHeading
              h="Benefits of SMS Authenticator"
              p="SMS OTP verification is a reliable way for businesses to confirm user identities by sending a unique OTP code via SMS. The process is straightforward: an OTP is generated and sent to the user’s mobile number. The user then enters the code to complete the verification, ensuring an added layer of security.
  For businesses handling high volumes of OTP requests, OTP sending services or apps enable the efficient and seamless delivery of codes worldwide. Mobile OTP verification enhances the user experience, allowing even on-the-go users to authenticate their identities quickly.
  By integrating SMS OTP services and implementing two-factor authentication, businesses can provide robust protection for user data, reinforcing trust and security."
            />
        
          </div>
        ),
      },
     
  
{
    component: FAQ,
    props:{data:BulkSMSFAQ}
    

  },
  {
    component: Agirlwithtext,
    
  },
  
];
const BulkSMS = () => {
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

export default BulkSMS;
