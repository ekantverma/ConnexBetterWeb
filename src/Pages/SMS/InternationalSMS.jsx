import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import CommonHeading  from '../../CommonComponent/CommonHeading';
import Scrollcomponent from '../../CommonComponent/Scrollcomponent';
import Agirlwithtext from '../../CommonComponent/Agirlwithtext';
import FAQ from "../../CommonComponent/FAQ";
import { internationalSmsziczac, internationalSmsBox,InternationalSMSFAQ,InternationalSMSScroll } from '../../Constant/SMSdata';
import international_hero from "../../assets/SMSImage/Lottie/International-SMS.json";
import CallToAction from "../../CommonComponent/CallToAction"

const InternationalSMS = () => {
  const sections = [
    {
      component: ContentImageBlock,
      props: {
        subheading: "Best International Bulk SMS Service Provider",
        heading: "Send your bulk SMS messages to International!",
        secheading:"International SMS API | International SMS Gateway | Send International SMS Globaly",
        content: "SMS messaging is a great way to communicate effectively with your customers. We connect to all major networks in International and around the world. ",
        lottie: "use",
        img: international_hero,
      },
    },
    {
      component: Boxcontainer,
      props: {
        heading: "Key Features of Our International SMS Gateway",
        para: "",
        carddata:  internationalSmsBox,
      },
    },
    {
      component: LeftRightBLock,
      props: { data: internationalSmsziczac },
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
        <div className="container grid items-center md:grid-cols-2">
          <CommonHeading
            h="How to Reduce International SMS Costs"
            p=""
          />
          <Scrollcomponent data={InternationalSMSScroll}/>
        </div>
      ),
    },
    
    {
      component: FAQ,
      props: { data: InternationalSMSFAQ },
    },
     {
          component: Agirlwithtext,
          
        },

  ];
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

export default InternationalSMS;
