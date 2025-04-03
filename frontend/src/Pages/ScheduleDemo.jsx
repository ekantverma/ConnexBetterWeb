import { CommonHeading } from "../CommonComponent/CommonHeading";
import RadiobuttonwithText from "../CommonComponent/RadiobuttonwithText";
import { useState } from "react";
import axios from "axios";

function ScheduleDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    companysize: "",
    intrestproduct: "",
    msg: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const { data } = await axios.post(
        "https://connexbetterwebbackend.vercel.app/api/contact",
        formData
      );

      setLoading(false);
      setResponseMessage({
        type: "success",
        text: data.success || "Message sent successfully!",
      });

      // Reset Form Data
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyname: "",
        companysize: "",
        intrestproduct: "",
        msg: "",
      });
    } catch (error) {
      setLoading(false);

      let errorMsg = "Something went wrong!";
      if (error.response) {
        errorMsg = error.response.data.error || "Server error!";
      } else if (error.request) {
        errorMsg = "No response from server!";
      } else {
        errorMsg = error.message;
      }

      setResponseMessage({ type: "error", text: errorMsg });
    }
  };

  return (
    <section className="pt-10">
      <div className="container grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <CommonHeading
              h="Schedule a Demo"
              p="Interested in learning more about Connex Better? You came to the right place. Feel free to ask whatever comes to mind."
              width="full"
            />
            <RadiobuttonwithText text="We are happy to answer your questions and get you acquainted with Workwize! Please submit your details." />
            <RadiobuttonwithText text="One of our experts will listen to your specific needs, show our platform, and explore with you to see if there's a fit." />
          </div>
          <div className="container hidden md:block">
            <div>
              <p>More inquiries:</p>
              <p className="font-semibold">Support@connexbetter.com</p>
            </div>
            <div>
              <p>Connex Better headquarters</p>
              <p className="font-semibold">
                Innov8, 3rd Floor, Plot No. 211, Okhla Phase 3, Delhi, Delhi
                110020, IN
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Email Field */}
            <div className="col-span-2">
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
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
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Company Name Field */}
            <div className="md:col-span-1">
              <label className="text-gray-700 font-semibold">
                Company Name
              </label>
              <input
                type="text"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your company name"
              />
            </div>

            {/* Phone Number Field */}
            <div className="md:col-span-1">
              <label className="text-gray-700 font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Phone number must be 10 digits."
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Company Size Field */}
            <div className="md:col-span-1">
              <label className="text-gray-700 font-semibold">
                Company Size
              </label>
              <input
                type="number"
                name="companysize"
                value={formData.companysize}
                onChange={handleChange}
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
                value={formData.intrestproduct}
                onChange={handleChange}
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
                value={formData.msg}
                onChange={handleChange}
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="col-span-2 flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700 text-sm">
                By clicking "Contact Us," I agree to receive communication on
                newsletters, promotional content, offers, and events through
                SMS, RCS, WhatsApp.
              </span>
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg w-full transition duration-300 ease-in-out ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Contact Us"}
              </button>
            </div>
          </form>

          {/* Display Success or Error Messages */}
          {responseMessage && (
            <p
              className={`text-sm mt-3 ${
                responseMessage.type === "success"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {responseMessage.text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ScheduleDemo;
