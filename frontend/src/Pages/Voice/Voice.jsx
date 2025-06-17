import React from 'react';
import ContentImageBlock from '../../CommonComponent/ContentImageBlock';
import Boxcontainer from '../../CommonComponent/Boxconatainer';
import { voiceBox } from '../../Constant/Voice';
import voice_hero from "../../assets/VoiceImage/lottie/Services-Voice-Hero (1).json";

const sections = [
  {
    component: ContentImageBlock,
    props: {
      subheading: "Voice Service Provider In India",
      heading: "Integrate and tailor voice calls within various applications using the Voice API.",
      content: "Quickly provision and deploy custom voice solutions with flexible APIs on the most extensive global network. Tailor voice solutions to your needs.",
      secheading: "IVR | Contact Center Solution | Voice OBD | Call Masking",
      lottie: "use",
      img: voice_hero,
    },
  },
  {
    component: Boxcontainer,
    props: {
      heading: "Explore Our Other Solutions",
      para: "",
      carddata: voiceBox,
    },
  },
];

const Voice = () => {
  return (
    <section className="bg-white w-full py-8 md:py-12 lg:py-16">
      {sections.map((section, index) =>
        section.custom ? (
          <React.Fragment key={index}>{section.custom()}</React.Fragment>
        ) : (
          <div
            key={index}
            className="max-w-[1280px] px-4 sm:px-6 md:px-8 mx-auto mb-12"
          >
            <section.component {...section.props} />
          </div>
        )
      )}
    </section>
  );
};

export default Voice;
