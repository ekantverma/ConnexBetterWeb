import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import CommonHeading from '../../CommonComponent/CommonHeading';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import FAQ from '../../CommonComponent/FAQ';
import {voiceBox,callpatchFAQ,callpatchinBox, callpatchziczac} from '../../Constant/Voice';
import voice_hero from "../../assets/VoiceImage/lottie/Services-Call-Patching-_-Number-Masking (4).json";
import Agirlwithtext from "../../CommonComponent/Agirlwithtext"

const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Number Masking Services for Businesses",
      heading: "Safeguard Your Business Conversations with Call Masking",
      content: "Integrate into your applications by utilizing our robust and versatile APIs, designed to enhance privacy and security while maintaining a seamless user experience.",
      secheading:"Mask phone number | Call Masking | Number Masking",
      lottie: "use",
      img: voice_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "Powerful Features of Call Masking Service",
      para: "",
      carddata: callpatchinBox,
    },
  },
  {
component:CommonHeading,
props:{

  h:"Achieve More with Connex Better Call Masking Services",
  p:"Designed to elevate your communication strategy, it ensures your message connects effectively and efficiently with your audience."
}
  },

  {
    component: LeftRightBLock,
     props: { data: callpatchziczac },
  },
  

  {
    component: Boxcontainer,
    props: {
      heading: "Explore Our Other Solutions",
      para: "",
      carddata: voiceBox,
    },
  },
{
          component:FAQ,
          props:{data:callpatchFAQ}
         },
         {
          component: Agirlwithtext,
          
        },
  

];

const CallPatch= () => {
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

export default CallPatch;

