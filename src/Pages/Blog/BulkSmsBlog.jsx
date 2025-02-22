import React from "react";
import BulkSmsblogimg from "../../assets/Blogimg/Group 1000011176.webp";
import hrimg from "../../assets/Blogimg/IMG-20240923-WA0012.jpg"
import { FaLinkedin } from "react-icons/fa";
import { Button } from "../../CommonComponent/Button";
const BulkSmsBlog = () => {
  const steps = [
    {
      title: "Set Up Connex for WhatsApp Messaging",
      description:
        "WhatsApp has become a powerful tool for businesses to communicate directly with customers, partners, and teams. For messaging, you need to enable a secure connection and configure the platform. Connex offers an easy-to-use interface to set up and send bulk messages efficiently.",
    },
    {
      title: "Create Your Contact List",
      description:
        "Before sending bulk messages, you’ll need to create a list of contacts. This can be done by uploading your contact list in CSV format, or manually adding contacts one at a time.",
    },
    {
      title: "Compose Your Message",
      description:
        "Once your contact list is ready, create the message you want to deliver. Connex offers a simple editor to craft your message, add media (images, videos), and preview your content.",
    },
    {
      title: "Choose Your Message Type",
      description:
        "Connex allows different types of messages, including promotional, informational, and updates. Choose the appropriate category to ensure compliance and user engagement.",
    },
    {
      title: "Schedule Your Messages",
      description:
        "Connex lets you schedule your messages to be sent at specific times. You can set recurring schedules for reminders or time-sensitive campaigns to maximize reach.",
    },
    {
      title: "Send Your Bulk Messages",
      description:
        "Once finalized, you can review and hit the 'Send' button to distribute your bulk messages. Connex ensures secure and fast delivery of messages to your audience.",
    },
    {
      title: "Track Performance and Analytics",
      description:
        "Analyze the results of your messages. Connex provides insights into the delivery rate, open rate, and overall campaign performance to help you optimize future campaigns.",
    },
  ];

  const features = [
    {
      title: "Seamless Integration",
      description:
        "Connex integrates effortlessly with WhatsApp’s API for reliable communication.",
    },
    {
      title: "Personalized Communication",
      description:
        "Send personalized messages with dynamic fields to increase engagement.",
    },
    {
      title: "Multi-Channel Support",
      description:
        "Besides WhatsApp, Connex supports multiple messaging platforms to streamline your communication efforts.",
    },
    {
      title: "Automated Campaigns",
      description:
        "Automate your messaging campaigns and manage them from a single platform.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Track the performance of your campaigns with real-time insights to refine your strategy.",
    },
  ];

  return (

    
<section>
<div className="container grid gap-10 md:grid-cols-2  place-content-center border-b-2 ">
<div className="flex flex-col justify-center gap-6">
  <Button name="Bulk WhatsApp Message"></Button>
  <h1 className="text-3xl font-semibold">How to Send Bulk Messages on WhatsApp with Connex Better</h1>
  <p>Sending bulk messages on WhatsApp using Connex better is an efficient way for businesses to engage with their audience and provide relevant, timely information.</p>
</div>
<div className=" flex items-center md:justify-end"><img src={BulkSmsblogimg} loading="lazy" height={100} width={300}></img></div>


</div>
   <div className="flex  flex-col md:flex-row gap-10">
      {/* Main Content */} 


      <div className=" md:w-[70%]">
          <p className="text-gray-700 leading-relaxed">
            WhatsApp has become a powerful tool for businesses to communicate
            directly with customers, partners, and teams. For businesses that
            need to reach a large audience quickly and efficiently, sending bulk
            messages on WhatsApp is essential. Connex offers an easy-to-use
            platform for sending WhatsApp bulk messages, allowing businesses to
            engage with their customers in a personal and professional manner.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Here’s a step-by-step guide on how to send bulk messages on WhatsApp
            using Connex.
          </p>
        </div>

        {/* Sidebar Section */}
        <div className="p-3">
          {/* Share Section */}
          <div className="mb-6">
            <h3 className="text-gray-600 text-sm font-semibold">Share this post on:</h3>
            <a
              href="https://linkedin.com/"
                 target="blank"
              className="inline-flex text-xl items-center text-blue-600 hover:text-blue-800 mt-2"
            >
              <FaLinkedin className="mr-2 text-4xl text-primery" />
              LinkedIn
            </a>
          </div>
          {/* Author Section */}
          <div className="flex items-center mt-4">
            <img
              src={hrimg} // Replace with actual author image
              alt="Author"
              className="w-20 h-20 rounded-full"
            />
            <div className="ml-4">
              <p className="text-gray-800 font-medium">Prangya Tandi</p>
              <p className="text-gray-500 text-sm"></p>
              <p className="text-gray-400 text-xs mt-2">
                28 Aug 2024 • 8 min read
              </p>
            </div>
          </div>
        </div>
      </div>
<div className=" container md:w-[70%]">
   
      
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 group-hover:text-blue-900 transition duration-300">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>


        <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 ">
          Why Choose Connex for WhatsApp Bulk Messaging?
        </h2>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700 list-disc">
              <span className="">{feature.title}:</span>{" "}
              {feature.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
        <p className="mb-4">
          Sending bulk messages on WhatsApp using Connex is an efficient way for
          businesses to engage with their audience and provide relevant, timely
          information. Whether you’re reaching out to customers, sending
          promotional offers, or sharing important updates, Connex ensures that
          your communication is impactful, personal, and scalable.
        </p>
        <p className="font-semibold">
          Ready to take your business communication to the next level? Sign up
          with Connex and start sending bulk WhatsApp messages today!
        </p>
      </div>

      </div>
</section>
    
    

  );
};

export default BulkSmsBlog;
