import { CommonHeading } from "../CommonComponent/CommonHeading";
import RadiobuttonwithText from "../CommonComponent/RadiobuttonwithText";
import { Form, useActionData } from "react-router-dom";
import { useState } from "react";

// Action function for handling form submissions
export const handelScheduleDemo = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const { email, phone } = data;

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: "Invalid email format" };
    }

    // Validate Phone Number (example for 10-digit number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return { error: "Invalid phone number. Must be 10 digits." };
    }

    console.log("Validated data:", data);
    return { success: "Form submitted successfully!" };
  } catch (error) {
    console.error("Error handling form submission:", error);
    return { error: error.message };
  }
};

function ScheduleDemo() {
  const [error, setError] = useState(null);
  const actionData = useActionData(); // To get data returned by the action function
  return (
    <section>
      <div className="container grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
        <div>
        <CommonHeading
            h="Schedule a Demo"
            p="Interested in learning more about Connex Better? You came to the right place. Feel free to ask whatever comes to mind."
            width="full"
          />
          <RadiobuttonwithText
            text="We are happy to answer your questions and get you acquainted with Workwize! Please submit your details."
          />
          <RadiobuttonwithText
            text="One of our experts will listen to your specific needs, show our platform, and explore with you to see if there's a fit."
          />
        </div>
          

<div className="container hidden md:block">
        <div>
          <p>More inquiries:</p>
          <p className="font-semibold">Support@connexbetter.com</p>
        </div>
        <div>
          <p>Connex Better headquarters</p>
          <p className="font-semibold">
            Innov8, 3rd Floor, Plot No. 211, Okhla Phase 3, Delhi, Delhi 110020, IN
          </p>
        </div>
      </div>
        </div>
        
        <div className="bg-[#f8f8f8] p-4 rounded-lg">
          <Form
            method="POST"
            action="/ScheduleDemo"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 "
          >
            {/* Email Field */}
            <div className="col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Name Field */}
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Company Name Field */}
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="companyname" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Phone Number Field */}
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9]{10}"
                title="Phone number must be 10 digits."
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Company Size Field */}
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="companysize" className="block text-sm font-medium text-gray-700">
                Company Size
              </label>
              <input
                type="number"
                id="companysize"
                name="companysize"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Interest Product Field */}
            <div className="col-span-2">
              <label htmlFor="intrestproduct" className="block text-sm font-medium text-gray-700">
                What product are you interested in?
              </label>
              <select
                name="intrestproduct"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a Product</option>
                <option value="SMS">SMS</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="RCS">RCS</option>
                <option value="Email">Email</option>
               <option value="Voice">Voice</option>
              </select>
            </div>
            {/* Message Field */}
            <div className="col-span-2">
              <label htmlFor="msg" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={4}
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Agreement Checkbox */}
            <div className="col-span-2">
              <label className="flex items-center">
                <input type="checkbox" required className="mr-2" />
                By clicking "Contact Us," I agree to receive communication on newsletters, promotional content, offers and events through SMS, RCS, WhatsApp.
              </label>
            </div>
            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Schedule a Demo
              </button>
            </div>
          </Form>
          {actionData?.error && <p className="text-red-500 text-base mt-2">{actionData.error}</p>}
          {actionData?.success && <p className="text-primery text-base mt-2">{actionData.success}</p>}
        </div>
        
      </div>
      
<div className="container md:hidden">
        <div>
          <p>More inquiries:</p>
          <p className="font-semibold">Support@connexbetter.com</p>
        </div>
        <div>
          <p>Connex Better headquarters</p>
          <p className="font-semibold">
            Innov8, 3rd Floor, Plot No. 211, Okhla Phase 3, Delhi, Delhi 110020, IN
          </p>
        </div>
      </div>
      
    
    </section>
  );
}
export default ScheduleDemo;