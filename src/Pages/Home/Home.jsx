import "./Home.css";
import { Suspense, lazy } from "react";
import { Brandimage } from "../../Constant/Homedata";
import { Brandimage2 } from "../../Constant/Homedata";
import heroimage from "../../assets/HomeImage/IMAGE/Hero.webp";
import ourfeature from "../../assets/HomeImage/Lottie/our feature.json";
import smscallimg from "../../assets/HomeImage/IMAGE/Staert sms.webp";
import metalogo from "../../assets/HomeImage/IMAGE/Metalogo.svg";
import { offers, chooseConnex, Boostrevenue, Insights, homeFAQ } from "../../Constant/Homedata";
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

// Reusable Suspense Wrapper
const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);
const LazyImage = ({ src, alt, height, width }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      height={height}
      width={width}
    />
  );
};

export const Home = () => {
  return (
    <section>
    
      {/* Hero Section */}
    {/* <Sidebar></Sidebar> */}
      <div className="px-[0.5rem] my-5 grid gap-6 md:grid-cols-2 items-center">
        <div className="content-sec flex flex-col gap-4">
          <p className="text-3xl md:text-5xl text-primery">Connect Better, Engage Better</p>
          <h1 className="text-3xl md:text-4xl font-normal flex flex-col gap-2">
            Transform customer interactions with thoughtful intelligent communication
          </h1>
          <SequentialText />
          <Button name="Request a Demo" link="/ScheduleDemo" />
        
      </div>
      <Suspense fallback={<div>Loading image...</div>}>
        <LazyImage src={heroimage} alt="heroimage" height={200} width={600} />
      </Suspense>
      </div>
      <div className="px-[0.5rem] my-3 text-xl flex justify-center md:text-2xl font-medium text-primery">
      <h2>Best Bulk SMS, RCS, IVR, and WhatsApp Service Provider in India Trusted by 1100+ Businesses Globally</h2>
      </div>

      {/* Brand Section */}
      <div className="px-[0.5rem] my-2">
        <LazyComponent Component={BrandSection}  props={{ data: Brandimage }}/>
      </div>

      {/* Advanced PaaS Section */}
      <div className="container grid gap-4 md:grid-cols-2 items-center">
        <div className="content-sec flex flex-col gap-2">
          <p className="text-2xl text-paracolor">
            World’s Most Advanced PaaS for
            <span className="text-primery ml-2">Enterprise Communications.</span>
          </p>
          <h2 className="text-3xl font-medium">SMS | RCS | WhatsApp | Email | Voice</h2>
          <div className="meta-logo-sec flex flex-col items-center justify-center h-28 w-28 rounded-full bg-secondary">
            <img src={metalogo} alt="Meta logo" width={25} />
            <p className="text-black">Meta</p>
            <p className="text-center text-xs">Business Partner</p>
          </div>
          <div className="flex gap-6">
            <Button name="Contact us Now" link="/Contact" />
            <Button name="Schedule a Demo" link="/ScheduleDemo" btnstyle="change" />
          </div>
        </div>
        <LazyComponent Component={LottieAnimation} props={{ animationData: ourfeature }} />
      </div>

      {/* Offerings Section */}
      <div className="container">
        <LazyComponent
          Component={Boxcontainer}
          props={{
            heading: "What we Offer",
            para: "We offer a full suite of communication APIs designed to connect businesses with customers. Our services include:",
            carddata: offers,
          }}
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="container">
        <LazyComponent
          Component={Boxcontainer}
          props={{
            heading: "Why do businesses choose Connex Better",
            para: "Connex Better provides reliable communication solutions and seamless API integration, ensuring smooth operations and enhanced customer interactions.",
            carddata: chooseConnex,

          }}
        />
      </div>

      {/* Get Started Section */}
      <div className="p-6 bg-[#f8f8f8] rounded-2xl flex flex-col items-center md:p-3">
        <LazyComponent
          Component={ContentImageBlock}
          props={{
            subheading: "Get Started Today",
            heading: "Start sending SMS with Connex Better for free",
            content: "Sign up today and create your perfect customer engagement experience.",
            img: smscallimg,
          }}
        />
      </div>

      {/* Ecosystem Section */}
      <div className="container grid md:grid-cols-2 items-center gap-5">
        <CommonHeading
          h="Create Your conversational ecosystem with multiple integration options"
          p="We want to keep your operations running smoothly. That’s why our platform is easy to work with. Choose from a wide range of integrations to build and add on top of our SMS API, and easily configure them with your existing systems."
          width="full"
        />
            <LazyComponent Component={BrandSection}  props={{ data: Brandimage2 }}/>
      </div>

      {/* Boost Revenue Section */}
      <div className="container">
        <LazyComponent
          Component={Boxcontainer}
          props={{
            heading: "Boost revenue and grow business.",
            para: "Utilize our dependable AI platform designed to streamline the journey from discussions to successful conversions.",
            carddata: Boostrevenue,
          }}
        />
      </div>

      {/* Insights Section */}
      <div className="container">
        <CommonHeading
          h="Insights & Updates"
          p="Stay updated with the latest trends, tips, and guides on API solutions and business communication strategies."
        />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Insights.map((ele, ind) => (
            <Blogcontainer key={ind} title={ele.title} content={ele.content} img={ele.img} buttonname={ele.buttonname} buttlink={ele. bttonlink} date={ele.date} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container">
        <LazyComponent Component={FAQ} props={{ data: homeFAQ }} />
      </div>

      {/* Call to Action */}
      <div className="container">
        <LazyComponent
          Component={CallToAction}
          props={{
            heading: "Try it yourself,",
            content: "Try for free today. No credit card required",
          }}
        />
      </div>
    </section>
  );
};

export default Home;
