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

const LottieAnimation = lazy(() =>
  import("../../CommonComponent/LottieAnimation")
);
const Boxcontainer = lazy(() => import("../../CommonComponent/Boxconatainer"));
const BrandSection = lazy(() => import("../../CommonComponent/Brandsection"));
const ContentImageBlock = lazy(() =>
  import("../../CommonComponent/ContentImageBlock")
);
const FAQ = lazy(() => import("../../CommonComponent/FAQ"));
const CallToAction = lazy(() => import("../../CommonComponent/CallToAction"));
const ShimmerUI = lazy(() => import("../../Component/ShimmerUI"));

const LazyComponent = ({ Component, props = {} }) => (
  <Suspense fallback={<ShimmerUI />}>
    <Component {...props} />
  </Suspense>
);

const LazyImage = ({ src, alt, height, width }) => (
  <img src={src} alt={alt} loading="lazy" height={height} width={width} />
);

export const Home = () => {
  return (
    <section>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center mt-4">
        {/* Gradient Background */}
        <div className="absolute top-16 left-8 w-[20vw] h-[16vh] bg-gradient-to-br from-blue-500 to-transparent blur-2xl opacity-50"></div>
        <div className="absolute top-14 right-14 w-[20vw] h-[20vh] bg-gradient-to-bl from-blue-700 to-transparent blur-3xl opacity-50"></div>

        {/* Hero Section */}
        <div className="relative px-4 my-10 grid gap-10 md:grid-cols-2 items-center">
          {/* Left Section (Text & Button) */}
          <div className="flex flex-col gap-6">
            <p className="text-3xl md:text-5xl font-semibold text-primery animate-fadeIn">
              Connect Better, Engage Better
            </p>
            <h1 className="text-2xl md:text-4xl font-normal leading-snug animate-slideInLeft">
              Transform customer interactions with intelligent communication
            </h1>
            <SequentialText />
            <Button name="Get Started" link="/ScheduleDemo" />
          </div>

          {/* Right Section (Image) */}
          <div className="relative flex justify-center animate-zoomIn">
            <LazyImage
              src={heroimage}
              alt="Hero"
              height={200}
              width={600}
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="px-4 my-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-fade-in">
          Best Bulk SMS, RCS, IVR, and WhatsApp Service Provider in India
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-700 mt-2 animate-fade-in-up">
          Trusted by{" "}
          <span className="font-bold text-primary">1100+ Businesses</span>
        </p>
      </div>

      {/* Brand Section */}
      <div className="px-4 my-4">
        <LazyComponent
          Component={BrandSection}
          props={{ data: Brandimage }}
          className="animate-fade-in-up"
        />
      </div>

      {/* Advanced PaaS Section */}
      <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center px-4 py-10">
        {/* Left Side Content */}
        <div className="flex flex-col gap-6 animate-fade-in">
          <p className="text-2xl text-gray-700 leading-snug">
            World’s Most Advanced PaaS for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
              Enterprise Communications.
            </span>
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            SMS | RCS | WhatsApp | Email | Voice
          </h2>

          {/* Meta Business Partner Section */}
          <div className="flex flex-col items-center justify-center h-32 w-32 rounded-full bg-white shadow-lg border-2 border-blue-500 p-4 hover:shadow-xl transition-all duration-300 ease-in-out">
            <img
              src={metalogo}
              alt="Meta logo"
              width={30}
              className="animate-pulse"
            />
            <p className="text-black font-semibold">Meta</p>
            <p className="text-xs text-center text-gray-600">
              Business Partner
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Button
              name="Contact us Now"
              link="/Contact"
              className="hover:scale-105 transition-transform duration-200"
            />
            <Button
              name="Schedule a Demo"
              link="/ScheduleDemo"
              btnstyle="change"
              className="hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Right Side Animation */}
        <div className="animate-fade-in-up">
          <LazyComponent
            Component={LottieAnimation}
            props={{ animationData: ourfeature }}
            className="max-w-lg"
          />
        </div>
      </div>

      {/* Offerings Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        {/* Heading & Subtext */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto animate-fade-in-up">
            We offer a full suite of communication APIs designed to connect
            businesses with customers.
          </p>
        </div>

        {/* Offerings Cards */}
        <div className="">
          <LazyComponent
            Component={Boxcontainer}
            props={{
              carddata: offers,
            }}
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
            Why Do Businesses Choose Connex Better?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto animate-fade-in-up">
            Reliable communication solutions with seamless API integration.
          </p>
        </div>
        <div className="">
          <LazyComponent
            Component={Boxcontainer}
            props={{
              carddata: chooseConnex,
            }}
          />
        </div>
      </div>

      {/* Get Started Section */}
      <div className="container mx-auto px-8 py-20 bg-gray-100 rounded-2xl shadow-xl min-h-[50vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left px-8 my-14">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 uppercase tracking-wide animate-fade-in">
              Get Started Today
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight animate-fade-in-up">
              Start Sending SMS with Connex Better for Free
            </h2>
            <p className="text-lg md:text-xl mt-6 text-gray-700 leading-relaxed max-w-2xl animate-fade-in-up">
              Sign up today and create your perfect customer engagement
              experience.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap md:justify-start justify-center gap-6">
              <a
                href="/contact"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Try it for Free
              </a>
              <a
                href="/contact"
                className="border border-gray-500 text-gray-700 hover:bg-gray-300 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center h-full items-center">
            <img
              src={smscallimg}
              alt="SMS Call"
              className="max-w-full h-auto rounded-lg animate-fade-in-up w-[400px] h-[250px]"
            />
          </div>
        </div>
      </div>

      {/* ───────── Ecosystem Section ───────── */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-100 rounded-2xl shadow-lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 text-center lg:text-left">
            <CommonHeading
              h="Create Your Conversational Ecosystem"
              p="Integrate multiple options easily with our platform."
              width="full"
            />
            <p className="mx-auto lg:mx-0 max-w-lg text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide">
              Scale your business communication effortlessly with our seamless
              integrations and intelligent automation tools.
            </p>
            <div className="pt-4 sm:pt-6 lg:pt-8 flex justify-center lg:justify-start">
              <a
                href="/explore"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* Slider */}
          <div className="flex justify-center animate-fade-in-up overflow-hidden h-auto lg:h-full">
            <LazyComponent
              Component={BrandSection}
              props={{ data: Brandimage2 }}
            />
          </div>
        </div>
      </div>

      {/* Boost Revenue Section */}
      <div className="container mx-auto py-16 px-6 md:px-12 bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight pt-8">
            Boost Revenue & Grow Your Business
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600 max-w-3xl mx-auto">
            Utilize our AI platform to streamline conversions and enhance
            efficiency.
          </p>
        </div>

        {/* Cards Section */}
        <div className="pb-2">
          <LazyComponent
            Component={Boxcontainer}
            props={{
              carddata: Boostrevenue,
            }}
          />
        </div>
      </div>

      {/* Insights Section */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <CommonHeading
            h="Insights & Updates"
            p="Stay updated with the latest trends and guides on API solutions."
          />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Insights.map((ele, ind) => (
            <div
              key={ind}
              className="bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-100 hover:shadow-xl p-5"
            >
              <Blogcontainer
                title={ele.title}
                content={ele.content}
                img={ele.img}
                buttonname={ele.buttonname}
                buttlink={ele.bttonlink}
                date={ele.date}
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <LazyComponent Component={FAQ} props={{ data: homeFAQ }} />

      <LazyComponent
        Component={CallToAction}
        props={{
          heading: "Try it Yourself",
          content: "Have questions? Get in touch with us today!",
          className:
            "bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 px-8 rounded-2xl shadow-lg text-center space-y-6",
          buttonProps: {
            className:
              "bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105",
            name: "Contact Us",
            link: "/contact",
          },
        }}
      />
    </section>
  );
};

export default Home;
