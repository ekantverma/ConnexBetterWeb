import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Form, useActionData } from "react-router-dom";
import { useState } from "react";

// Action function for handling form submissions
export const handleContact = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { email, phone } = data;

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Promise.resolve({ error: "Invalid email format" });
    }

    // Validate Phone Number (example for 10-digit number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return Promise.resolve({ error: "Invalid phone number. Must be 10 digits." });
    }

    console.log("Validated data:", data);
    return Promise.resolve({ success: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error handling form submission:", error);
    return Promise.resolve({ error: error.message });
  }
};


function Contact() {
  const actionData = useActionData();

  return (
    <section className="py-10">
      <div className="container grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <CommonHeading
            h="Contact Us"
            p="Interested in learning more about Connex Better? Feel free to ask anything!"
            width="full"
          />
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <Form
            method="POST"
            action="/Contact"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Email Field */}
            <div className="col-span-2">
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Name Field */}
            <div className="md:col-span-1">
              <label className="text-gray-700 font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Company Name Field */}
            <div className="md:col-span-1">
              <label className="text-gray-700 font-semibold">Company Name</label>
              <input
                type="text"
                name="companyname"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your company name"
              />
            </div>

            {/* Phone Number Field */}
            <div className="md:col-span-1">
              <label className="text-gray-700 font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                title="Phone number must be 10 digits."
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Company Size Field */}
            <div className="md:col-span-1">
              <label className="text-gray-700 font-semibold">Company Size</label>
              <input
                type="number"
                name="companysize"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Number of employees"
              />
            </div>

            {/* Interest Product Field */}
            <div className="col-span-2">
              <label className="text-gray-700 font-semibold">
                What product are you interested in?
              </label>
              <select
                name="intrestproduct"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
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
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea
                name="msg"
                rows={4}
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="col-span-2 flex items-start gap-2">
              <input type="checkbox" required className="mt-1" />
              <span className="text-gray-700 text-sm">
                By clicking "Contact Us," I agree to receive communication on newsletters, 
                promotional content, offers, and events through SMS, RCS, WhatsApp.
              </span>
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg w-full transition duration-300 ease-in-out"
              >
                Contact Us
              </button>
            </div>
          </Form>

          {/* Display Success or Error Messages */}
          {actionData?.error && (
            <p className="text-red-500 text-sm mt-3">{actionData.error}</p>
          )}
          {actionData?.success && (
            <p className="text-green-500 text-sm mt-3">{actionData.success}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
