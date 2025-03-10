import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import { CommonHeading } from '../../CommonComponent/CommonHeading';
import FAQ from "../../CommonComponent/FAQ";
import { emailBox ,emailziczac,emailScroll,emailFAQ } from '../../Constant/Emaildata';
import Scrollcomponent from '../../CommonComponent/Scrollcomponent';
import sms_hero from "../../assets/Email-20241116T100907Z-001/Email/Lottie/Services-Email (1).json";



const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Email API for Developers",
      heading: "Connect with Your Ideal Customers Effortlessly Using Connex Better User-Friendly Email API",
      content: "Easily connect with your perfect customers using Connex Better's super simple Email API. Count on smooth delivery, personalized touches, and the ability to grow your connections and boost your business.",
      secheading:"SMTP Server For Email | Transaction Email | Email API",
      lottie: "use",
      img: sms_hero,
    },
  },
    {
          custom: () => (
            <div className="rounded-2xl p-7 bg-tertiary">
              <CommonHeading
                h="Benefit from exceptional results on Email API "
                p=""
              />
              <div className='grid md:grid-cols-3'>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-3xl text-primery font-semibold'>20bn+</h2>
                  <p>emails per month</p>
                </div>
    
                <div className='flex flex-col gap-3'>
                  <h2 className='text-3xl text-primery font-semibold'>2 sec</h2>
                  <p>average delivery time</p>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-3xl text-primery font-semibold'>99.4%</h2>
                  <p>deliverability rate achieved</p>
                </div>
                
              </div>
         
            </div>
          )},

          {
            component: Boxcontainer,
            props: {
              heading: "Delight your customers with our Email Solutions",
              para: "Integrate our business emailing solution with your application and delight your customers like never before. Whether it’s one time password (OTP) for user verification, authentication requests or updates to your customers, our emailing platform is the solution for your business.",
              carddata:emailBox ,
            },
          },
          {
            component:CommonHeading,
            props:{
                h:"Make your customers happy with our awesome Email Solutions!",
                p:"Connect our emailing tool with your app to wow customers! Whether you need a one-time password for verification, an authentication request, or updates, our platform has you covered."
            }
          },
          {
            component: LeftRightBLock,
            props: { data: emailziczac },
          },
          {
            custom: () => (
              <div className="container grid md:grid-cols-2 items-center">
                <CommonHeading
                  h="How do you choose the right email API?"
                  p="Email API includes business, transactional, and contextual emails. Choose the one that best suits your needs."
                />
                <Scrollcomponent data={emailScroll}/>
              </div>
            ),
          },

          

  
 {
    component: FAQ,
    props:{
      data:emailFAQ
    }
  },
];

const Email= () => {
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

export default Email;
