import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import Leftimagerightcontent from "../../CommonComponent/Leftimagerightcontent";
import { CommonHeading } from '../../CommonComponent/CommonHeading';
import Scrollcomponent from '../../CommonComponent/Scrollcomponent';
import Brandsection from "../../CommonComponent/Brandsection";
import { Accordian } from '../../CommonComponent/Accordian';
import FAQ from "../../CommonComponent/FAQ";
import { SMSAPIBox, SMSAPIleftrightcontent,SMSAPIScroll,SMSAPIFAQ,SMSAPIDLT} from '../../Constant/SMSdata';
import sms_hero from "../../assets/SMSImage/Lottie/sms_hero.json";
import smsapicoding from "../../assets/SMSImage/IMAGE/SMSAPICoding.svg";
import priceboximg from "../../assets/SMSImage/Lottie/SMS (1).json";
import { Button } from '../../CommonComponent/Button';
import { Brandimage2 } from '../../Constant/Homedata';
const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "SMS API for Developers",
      heading: "Send SMS worldwide with a top-rated SMS service provider.",
      secheading:" SMS API |SMS API Integration | Transactional SMS API",
      content: "Achieve the highest SMS delivery rates worldwide using a reliable A2P SMS service from Connex Better.",

      lottie: "use",
      img: sms_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "A comprehensive global SMS provider that handles everything.",
      para: "Our A2P SMS service supports diverse use cases, delivering top-notch delivery rates. It includes advanced fraud protection, personalization options, and more.",
      carddata: SMSAPIBox,
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
    component: LeftRightBLock,
    props: { data: SMSAPIleftrightcontent },
  },
  {
    custom: () => (
      <div className="container grid md:grid-cols-2 items-center">
        <CommonHeading
          h="How to choose an SMS provider"
          p="Here are the key factors you should consider when choosing an SMS provider."
        />
        <Scrollcomponent data={SMSAPIScroll} />
      </div>
    ),
  },
  {
    component: Leftimagerightcontent,
    props: {
      heading: "Be up and running in no time",
      para: "Build the experiences your customers want with our flexible API stack. Integrate their favorite channels with your business workflow to elevate their customer journey.",
      img: smsapicoding,
    
    },
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
      <div className="container grid md:grid-cols-2 items-center gap-8">
      <div>
        {
          SMSAPIDLT.map((ele,ind)=>
            <Accordian val={ele} key={ind}></Accordian>

          )
        }
      </div>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col gap-4 ">
      <div className="border-b-2 border-blue-400 pb-2">
        <h1 className="text-blue-600 text-2xl font-bold">DLT Registration</h1>
      </div>
      <p className="text-gray-700 mt-4">
        Do you have any additional questions you would like to ask?
      </p>
      <Button name="Contact Now" link="/Contact"></Button>
    </div>
     </div>
    ),
  },


  {
    component: FAQ,
    props:{data:SMSAPIFAQ}
  },
];

const SMSAPI = () => {
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

export default SMSAPI;
