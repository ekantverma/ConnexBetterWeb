import "./Home.css";
import { Suspense, lazy } from "react";
import {
  Brandimage,
  Brandimage2,
  offers,
  chooseConnex,
  Boostrevenue,
  Insights,
  homeFAQ,
} from "../../Constant/Homedata";
import heroimage from "../../assets/HomeImage/IMAGE/Hero.webp";
import ourfeature from "../../assets/HomeImage/Lottie/our feature.json";
import smscallimg from "../../assets/HomeImage/IMAGE/Start sms.webp";
import metalogo from "../../assets/HomeImage/IMAGE/Metalogo.svg";
import { Button } from "../../CommonComponent/Button";
import { SequentialText } from "../../CommonComponent/SequentialText";
import { CommonHeading } from "../../CommonComponent/CommonHeading";
import { Blogcontainer } from "../../CommonComponent/Blogcontainer";

const LottieAnimation = lazy(() => import("../../CommonComponent/LottieAnimation"));
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
const ContentImageBlock = lazy(() => import("../../CommonComponent/ContentImageBlock"));
const FAQ = lazy(() => import("../../CommonComponent/FAQ"));
const CallToAction = lazy(() => import("../../CommonComponent/CallToAction"));

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

const LazyImage = ({ src, alt, height, width }) => (
  <img src={src} alt={alt} loading="lazy" height={height} width={width} />
);

export const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="px-2 my-5 grid gap-6 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-3xl md:text-5xl text-primery">Connect Better, Engage Better</p>
          <h1 className="text-3xl md:text-4xl font-normal flex flex-col gap-2">
            Transform customer interactions with intelligent communication
          </h1>
          <SequentialText />
          <Button name="Request a Demo" link="/ScheduleDemo" />
        </div>
        <LazyImage src={heroimage} alt="Hero" height={200} width={600} />
      </div>

      <div className="px-2 my-3 text-xl text-center md:text-2xl font-medium text-primery">
        <h2>Best Bulk SMS, RCS, IVR, and WhatsApp Service Provider in India Trusted by 1100+ Businesses</h2>
      </div>

      {/* Brand Section */}
      <div className="px-2 my-2">
        <LazyComponent Component={BrandSection} props={{ data: Brandimage }} />
      </div>

      {/* Advanced PaaS Section */}
      <div className="container grid gap-4 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-paracolor">
            World’s Most Advanced PaaS for <span className="text-primery">Enterprise Communications.</span>
          </p>
          <h2 className="text-3xl font-medium">SMS | RCS | WhatsApp | Email | Voice</h2>
          <div className="flex flex-col items-center justify-center h-28 w-28 rounded-full bg-secondary">
            <img src={metalogo} alt="Meta logo" width={25} />
            <p className="text-black">Meta</p>
            <p className="text-xs text-center">Business Partner</p>
          </div>
          <div className="flex gap-6">
            <Button name="Contact us Now" link="/Contact" />
            <Button name="Schedule a Demo" link="/ScheduleDemo" btnstyle="change" />
          </div>
        </div>
        <LazyComponent Component={LottieAnimation} props={{ animationData: ourfeature }} />
      </div>

      {/* Offerings Section */}
      <LazyComponent Component={Boxcontainer} props={{ heading: "What we Offer", para: "We offer a full suite of communication APIs designed to connect businesses with customers.", carddata: offers }} />

      {/* Why Choose Us */}
      <LazyComponent Component={Boxcontainer} props={{ heading: "Why do businesses choose Connex Better", para: "Reliable communication solutions with seamless API integration.", carddata: chooseConnex }} />

      {/* Get Started */}
      <LazyComponent Component={ContentImageBlock} props={{ subheading: "Get Started Today", heading: "Start sending SMS with Connex Better for free", content: "Sign up today and create your perfect customer engagement experience.", img: smscallimg }} />

      {/* Ecosystem */}
      <div className="container grid md:grid-cols-2 items-center gap-5">
        <CommonHeading h="Create Your Conversational Ecosystem" p="Integrate multiple options easily with our platform." width="full" />
        <LazyComponent Component={BrandSection} props={{ data: Brandimage2 }} />
      </div>

      {/* Boost Revenue */}
      <LazyComponent Component={Boxcontainer} props={{ heading: "Boost revenue and grow business.", para: "Utilize our AI platform to streamline conversions.", carddata: Boostrevenue }} />

      {/* Insights */}
      <CommonHeading h="Insights & Updates" p="Stay updated with the latest trends and guides on API solutions." />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Insights.map((ele, ind) => (
          <Blogcontainer key={ind} title={ele.title} content={ele.content} img={ele.img} buttonname={ele.buttonname} buttlink={ele.bttonlink} date={ele.date} />
        ))}
      </div>

      {/* FAQ Section */}
      <LazyComponent Component={FAQ} props={{ data: homeFAQ }} />

      {/* Call to Action */}
      <LazyComponent Component={CallToAction} props={{ heading: "Try it yourself", content: "Try for free today. No credit card required." }} />
    </section>
  );
};

export default Home;

