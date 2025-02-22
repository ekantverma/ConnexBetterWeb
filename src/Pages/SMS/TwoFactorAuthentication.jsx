import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import Leftimagerightcontent from "../../CommonComponent/Leftimagerightcontent";
import CommonHeading  from '../../CommonComponent/CommonHeading';
import Scrollcomponent from '../../CommonComponent/Scrollcomponent';
import Brandsection from "../../CommonComponent/Brandsection";
import FAQ from "../../CommonComponent/FAQ";
import { TwoFactorAuthenticationziczac,TwoFactorAuthenticationBox ,TwoFactorAuthenticationScroll,TwoFactorAuthenticationFAQ} from '../../Constant/SMSdata';
import Amanstandwithphoneimg from "../../assets/SMSImage/IMAGE/What is OTP Understanding One-Time Password Authentication.webp"
import authentication_hero from "../../assets/SMSImage/Lottie/Two-Factor Authentication Hero.json";
import twofactorbigimg from "../../assets/SMSImage/IMAGE/Secure Your Transactions with SMS-Based Verification.webp"
import Agirlwithtext from '../../CommonComponent/Agirlwithtext';
import { Brandimage2 } from '../../Constant/Homedata';
const TwoFactorAuthentication = () => {

  const sections = [
    {
      component: ContentImageBlock,
      props: {
        subheading: "Best OTP SMS Service Provider in India",
        heading: "Best OTP SMS Service Provider in India",
        secheading:"OTP Authentication | OTP Validation | OTP Verification |Two Factor Authentication",
        content: "Enhance user security with our OTP service. Ensure smooth identity verification for online transactions while safeguarding data through dependable OTP SMS authentication via SMS, WhatsApp, RCS, Email, or Voice worldwide.",
        lottie: "use",
        img: authentication_hero,
      },
    },
    {
      custom: () => (
        <div className="p-7 bg-tertiary rounded-2xl">
          <CommonHeading
            h="Why Authentication is important?"
            p="An SMS verification service adds an extra layer of protection for your customers to prevent hackers from accessing accounts and stealing data. Seamless account registration with SMS 2FA messages also increases conversions and promotes business growth."
          />
          <div className='grid md:grid-cols-2'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-3xl text-primery font-semibold'>81%</h2>
              <p>of breaches are due to weak or stolen passwords</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='text-3xl text-primery font-semibold'>61%</h2>
              <p>of people use the same password for multiple accounts</p>
            </div>
            
          </div>
     
        </div>
      ),


    },

    {
      component: Boxcontainer,
      props: {
        heading: "Boost the security of your applications with Our OTP Authenticator API",
        para: "",
        carddata: TwoFactorAuthenticationBox,
      },
    },
    {
      component:CommonHeading,
      props:{
        h: "How does [SMS 2FA] work?",
        p: "An SMS verification service reduces the chances of users being hacked, since fraudsters would need both their password and their mobile device.",
      }
    },
    {
      component: LeftRightBLock,
      props: { data: TwoFactorAuthenticationziczac },
    },
    {
      custom: () => (
        <div className="container grid md:grid-cols-2 place-content-center">
          <CommonHeading
            h="Benefits of SMS Authenticator"
            p=""
          />
          <Scrollcomponent  data={TwoFactorAuthenticationScroll}/>
        </div>
      ),
    },
    {
      custom: () => (
        <div className="container flex flex-col gap-7">
        <img src={twofactorbigimg } alt="image of Authentication" loading='lozy'></img>
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
      custom: () => (
        <div className="container grid md:grid-cols-2 items-center gap-5 p-5">
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
      component: Leftimagerightcontent,
      props: {
        heading: "What is OTP? Understanding One-Time Password Authentication",
        para: "OTP, or One-Time Password, is a temporary code used to authenticate users during transactions or logins. Unlike traditional passwords, OTPs are valid for only one session, enhancing security. OTPs are sent via SMS or app to verify identity, ensuring only authorized users can proceed. Using OTP codes keeps your data safe and provides a user-friendly verification method.",
        img: Amanstandwithphoneimg ,
      },
    },
  
    {
      component: FAQ,
      props: { data: TwoFactorAuthenticationFAQ },
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

export default TwoFactorAuthentication;
