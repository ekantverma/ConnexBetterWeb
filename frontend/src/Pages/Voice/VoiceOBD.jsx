import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import CommonHeading from '../../CommonComponent/CommonHeading';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';
import Scrollcomponent from '../../CommonComponent/Scrollcomponent';
import FAQ from '../../CommonComponent/FAQ';
import {voiceBox,obdServiceziczac, obdBox,obdscroll,obdFAQ} from '../../Constant/Voice';

import voice_hero from "../../assets/VoiceImage/lottie/Voice-OBD-Hero (1).json";
import Agirlwithtext from "../../CommonComponent/Agirlwithtext"

const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Voice Broadcast Service (Voice OBD)",
      heading: "Amplify Customer Connections",
      content: "Enhance and strengthen your customer engagement with impactful communication solutions that make your message heard.",
      secheading:"Voice Broadcast | Predictive Dialing | Auto Dialer | Voice Call | Political Voice Campaign",
      lottie: "use",
      img: voice_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "Powerful Features of Voice OBD Service",
      para: "",
      carddata: obdBox,
    },
  },
  {
component:CommonHeading,
props:{
  h:"Achieve More with Connex Better Voice OBD Services",
  p:"Designed to elevate your communication strategy, it ensures your message connects effectively and efficiently with your audience."
}
  },

  {
    component: LeftRightBLock,
     props: { data: obdServiceziczac },
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
    custom: () => (
      <div className="container grid md:grid-cols-2 items-center">
        <CommonHeading
          h="Why Should Your Business Use Our Voice OBD Service"
          p=""
        />
        
        <Scrollcomponent data={obdscroll} />
      </div>
    ),
  },

{
          component:FAQ,
          props:{data:obdFAQ}
         },
         {
          component: Agirlwithtext,
          
        },
  

];

const VoiceOBD= () => {
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

export default VoiceOBD;

