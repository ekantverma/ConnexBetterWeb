import React from "react";
import BulkEmailblogimg from "../../assets/Blogimg/Group 1000011179.webp";
import emailblogimg2 from "../../assets/Blogimg/Group 1000011181.webp"
import emailblogimg3 from "../../assets/Blogimg/65672267_9528653 1.webp";
import { FaLinkedin } from "react-icons/fa";
import hrimg from "../../assets/Blogimg/IMG-20240923-WA0012.jpg"
import { Button } from "../../CommonComponent/Button";
// import FaLinkedin from "react-icons"
const BulkEmailBlog = () => {
    const tips = [
        {
          title: "1. Re-engage Inactive Customers With Email Retargeting",
          description:
            "Email retargeting is a powerful strategy in email marketing that motivates repeat customers to increase their spending and helps re-engage inactive clients and subscribers who haven't made a purchase. Reminding dormant B2B clients of the advantages of staying loyal to your brand can help win them back. Additionally, sending emails to remind customers to renew their purchases of products or services is an effective B2B email marketing technique for re-engagement.",
          image: emailblogimg3, // Replace with the actual image URL or import
        },
        {
          title: "2. Create Email Subject Lines That Optimise Open Rates",
          description:
            "Effective email subject lines boost marketing. They're the first thing recipients see. Ensure relevance, as 69% report spam based on subject lines. Intriguing lines lead to 33% more opens. Personalised lines grab attention. Use emojis, stats, shoutouts, sales, or freebies to entice.",

        },
        {
          title:
            "3. Your Email Should Include Interactive And Commercial Content",
          description:
            "B2B marketing differs from B2C. Ensure your B2B email marketing is educational with a profit goal. Customers want to learn how to boost sales. Show them how your product or service can increase profit through new product lines, retail display ideas, or price changes. B2C emails often use behavioural triggers to convert subscribers. B2B emails should focus on facts, accurate information, and immediate benefits.",

        },
        {
          title: "4. Send Emails Automatically To Avoid Missing Opportunities",
          description:
            "Email automation is an essential tool to consider, even though most email providers offer scheduling and bulk sending capabilities. Initially, marketing automation might appear daunting, but research from Campaign Monitor shows that automated emails generate 320% more revenue than their non-automated counterparts. To optimize the sales process with email automation, executives need to understand the product and its features. Once they do, they can effectively create and manage numerous personalized email marketing campaigns. By using automated workflows, email automation becomes a powerful marketing asset, allowing you to deliver the right message to the right audience at the right time, thereby nurturing leads and driving revenue from both potential and existing customers.",

        },
        {
            title: "5.Utilise Dependable And Thorough B2b Data",
            description:
              "B2B data fuels your email marketing engine. Having access to accurate and comprehensive B2B data is essential for creating active lists, enhancing email relevance, and segmenting target audiences.To craft a complete email marketing campaign strategy, start by profiling your B2B leads. Deepen your understanding of your target audience by leveraging behavioral, psychographic, demographic, and firmographic data, and tailor your email messages accordingly. This approach will boost your email marketing ROI and help you build stronger relationships with prospects and customers.Keeping your data clean is vital for improving the effectiveness of your email marketing efforts and achieving a high conversion rate. Almost 27% of marketers report that inaccurate data leads to an annual revenue loss of 10% or more.",

          },
      ];

      const content = [
        "The use of B2B email marketing helps engage with a large audience rather than individuals. This eliminates the hassle of interacting with prospects manually for businesses. B2B services help in developing effective email strategies to capture the interest of potential customers while keeping existing customers engaged in the process. Currently, B2B businesses make decisions based on data extracted through email marketing tools that enhance their results.",
        "B2B email marketing is popular among decision-makers because of its cost-effectiveness and high returns. By scheduling bulk emails for B2B services, the chances of missing potential opportunities are almost zero, enabling decision-makers to make faster deals.",
        "B2B email should focus on sharing information, asking for customer reviews, understanding ongoing trends, or success whenever possible to achieve better results.",
      ];

return (

    
<section>
<div className="container grid gap-10 md:grid-cols-2  place-content-center border-b-2 ">
<div className="flex flex-col justify-center gap-6">
  <Button name="Email"></Button>
  <h1 className="text-3xl font-semibold">Best Email Marketing Tips to Increase B2B Sales in 2025</h1>
  <p>Email is not just limited to sending messages to family or employees anymore. While not all of your potential customers use social media or are passionate blog readers, almost everyone uses email every day.</p>
</div>
<div className=" flex items-center md:justify-end"><img src={BulkEmailblogimg} loading="lazy" alt="image of Email Blog" height={100} width={300}></img></div>


</div>
   <div className="flex flex-col md:flex-row gap-10">
      {/* Main Content */} 


      <div className=" md:w-[70%]">
          <p className="text-gray-700 leading-relaxed">
          In India, a whopping 122 billion emails are sent every hour, showing that email is still going strong. For digital marketers, email marketing is a key tool. So, businesses need to know how to make the most of it to hit their goals. Using bulk email marketing services is a smart move to reach your customers. Sure, there might be some bumps along the way, but this article will give you some handy tips to nail your marketing targets!
          </p>
     </div>

        {/* Sidebar Section */}
        <div className="md:p-3">
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
                         className="w-20 h-20 rounded-full" />
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

<div className="">
        {/* Title */}
        <h2 className="text-3xl font-bold text-primery mb-6">
          Here’s Why You Need Bulk Email Marketing To Increase Your B2B Sales
        </h2>

        {/* Content */}
        <div className="space-y-6">
          {content.slice(0, 2).map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Illustration */}
        <div className="flex justify-center my-8">
          <img
            src={emailblogimg2} // Replace with the actual image path
            alt="Bulk Email Marketing Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Closing Note */}
        <p className="text-gray-700 text-lg">
          {content[2]}
        </p>
      </div>

   
      
        <div className="space-y-8">
        <h2 className="text-3xl font-bold text-primery mb-6">Tips To Increase B2b Sales With Bulk Email Marketing Services:</h2>
          {tips.map((step, index) => (
            <div key={index} className="group">
              <h3 className="text-lg sm:text-xl font-semibold">
                 {step.title}
              </h3>
              
              <p className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
              {step.image?     <div className="flex justify-center my-8">
          <img
            src={step.image} // Replace with the actual image path
            alt="Bulk Email Marketing Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>:""}
         
            </div>
          ))}
        </div>


      </div>
</section>
    
    

  );
};

export default BulkEmailBlog;
