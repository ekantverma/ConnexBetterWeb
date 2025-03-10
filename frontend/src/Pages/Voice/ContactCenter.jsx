import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import CommonHeading from '../../CommonComponent/CommonHeading';
import LeftRightBLock from '../../CommonComponent/LeftRightBLock';

import FAQ from '../../CommonComponent/FAQ';
import {voiceBox,ccsFAQ,ccsBox, callpatchziczac} from '../../Constant/Voice';
import ccsbigimg from "../../assets/VoiceImage/IMAGE/Frame 1000011585.webp"
import voice_hero from "../../assets/VoiceImage/lottie/Services-Contact-center-solution.json";
import Agirlwithtext from "../../CommonComponent/Agirlwithtext"

const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Contact Center Solution",
      heading: "An entire call center, right within your browser",
      content: "Enhance your agents' capabilities by enabling them to dial, receive, and manage calls directly from the unified interface of Connex Better.",
      lottie: "use",
      img: voice_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "Discover the Amazing Features of Our Call Center Software",
      para: "",
      carddata: ccsBox,
    },
  },
  {
      component: CommonHeading,
      props: {
        h: "Customer Engagement Strategies for Success",
        p: "Our IVR as a Service offers businesses a comprehensive solution to automate customer interactions and improve service delivery. With our advanced IVR call centre solutions.",
       
      },
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
              custom: () => (
                <div className="container">
                         <CommonHeading
                    h="Why We The Best Call Center Software for High-growth businesses?"
                    p=""
                  />
                <img src={ ccsbigimg  } alt="image of Authentication" loading='lozy'></img>
         
              
                </div>
              ),
            },

 
         {
          component:FAQ,
          props:{data:ccsFAQ}
         },
         {
          component: Agirlwithtext,
          
        },
  

];

const ContactCenter= () => {
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

export default ContactCenter;

