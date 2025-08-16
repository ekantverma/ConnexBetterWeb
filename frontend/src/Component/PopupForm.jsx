import React, { useState } from "react";
import axios from "axios";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgPhone } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import metalogo from "../assets/HomeImage/IMAGE/metalogo.png";
import truecallerlogo from "../assets/HomeImage/IMAGE/truecallerlogo.png";
import { FaStar } from "react-icons/fa";
import { createPortal } from "react-dom";


const PopupForm = ({ onClose }) => {
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

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999999] px-3"
      onClick={onClose} // backdrop click se band hoga
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-6xl max-h-[100vh] overflow-y-auto p-3 rounded-[10px] shadow-2xl px-6"
        style={{
          background: "linear-gradient(234deg, #E2E8FF 3.46%, #FBFCFF 98.63%)",
        }}
        onClick={(e) => e.stopPropagation()} // andar click se close na ho
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-transform transform hover:scale-110"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-2 text-[#1F1F1F]">
          Pause! Before You Press <span className="text-red-500">X</span>
        </h2>
        <h4 className="text-center text-xl sm:text-2xl text-gray-700 mb-6">
          See What You Could Be Missing!
        </h4>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div>
            <p className="mb-4 text-black text-xl font-medium leading-6">
              Interested in learning more about Connex Better? You came to the
              right place. Feel free to ask whatever comes to mind.
            </p>

            <div className="space-y-2">
              <div className="flex gap-x-2">
                <span className="text-primary text-xl flex-shrink-0 pt-[2px] text-blue-700">
                  <IoIosCheckmarkCircle />
                </span>
                <p className="text-gray-600 font-normal text-base">
                  We are happy to answer your questions and get you acquainted
                  with Workwize! Please submit your details.
                </p>
              </div>
              <div className="flex gap-x-2">
                <span className="text-primary text-xl flex-shrink-0 pt-[2px] text-blue-700">
                  <IoIosCheckmarkCircle />
                </span>
                <p className="text-gray-600 font-normal text-base">
                  One of our experts will listen to your specific needs, show
                  our platform, and explore with you to see if there's a fit.
                </p>
              </div>
            </div>

            <div className="text-black text-lg font-medium mt-4">
              Have a Question? Let's Talk!
            </div>

            <div className="mt-1 space-y-3 text-sm text-gray-700">
              {/* Phone */}
              <div className="gap-2">
                <span className="text-blue-700 text-xl flex justify-start items-center gap-2">
                  <CgPhone />{" "}
                  <span className="text-[#B3261E] leading-7 font-semibold">
                    We answer our phones!
                  </span>
                </span>
                <div className="text-[#44444C] font-semibold text-lg ml-7">
                  +91-6350220133
                </div>
              </div>

              {/* Address with Flag */}
              <div className="gap-2">
                <span className="text-blue-700 text-xl flex justify-start items-center gap-2">
                  <span className="text-xl text-green-700">🇮🇳</span>{" "}
                  <span className="text-[#B3261E] leading-7 font-semibold">
                    Address
                  </span>
                </span>
                <div className="text-[#44444C] font-semibold text-lg ml-7">
                  Connex Better headquarters Innov8, 3rd Floor, Plot No. 211,
                  Okhla Phase 3, Delhi, Delhi 110020, IN
                </div>
              </div>

              {/* Email */}
              <div className="gap-2">
                <span className="text-red-500 text-xl flex justify-start items-center gap-2">
                  <SiGmail />
                  <span className="text-[#B3261E] leading-7 font-semibold">
                    Email Us
                  </span>
                </span>
                <div className="text-[#44444C] font-semibold text-lg ml-7">
                  Support@connexbetter.com
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg flex flex-col items-start justify-start max-w-[98%] p-3 mt-2 border">
              {/* Highlight Boxes */}
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {[
                  {
                    heading: "7 Days",
                    sub: "No payment required",
                    bold: "Free Trial",
                  },
                  {
                    heading: "An IIM-",
                    sub: "Founded Company",
                    bold: "Alumni",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 px-1 py-1 rounded-xl border border-[#D5D1D1] bg-white shadow-md w-[95px] h-[70px]"
                  >
                    <p className="text-blue-700 font-semibold text-center leading-snug text-lg">
                      {item.heading} <br /> {item.bold}
                    </p>
                    <p className="text-[10px] text-gray-500 text-center">
                      {item.sub}
                    </p>
                  </div>
                ))}

                <div className="flex items-center justify-center p-2 rounded-xl border border-[#D5D1D1] bg-white shadow-md w-[90px] h-[70px]">
                  <img
                    src={metalogo}
                    alt="Meta logo"
                    className="max-h-[80px]"
                  />
                </div>

                <div className="flex items-center justify-center p-2 rounded-xl border border-[#D5D1D1] bg-white shadow-md w-[90px] h-[70px]">
                  <img
                    src={truecallerlogo}
                    alt="Truecaller logo"
                    className="max-h-[80px]"
                  />
                </div>
              </div>
              <hr className="w-full border-t-2 border-[rgba(0, 0, 0, 0, 0.40)] my-3" />
              <div className="flex gap-3 text-yellow-400 mb-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <div>
                <h3 className="text-2xl">
                  Rated <span className="text-[#4D49FC]">4.9</span> by 
                  <span className="text-[#4D49FC]">1000+</span> Happy
                  Customers. <span className="text-[#4D49FC]">10+ Years</span>
                   of Industry-experience.
                </h3>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-1 text-center text-[#1F1F1F]">
              Try Us with <span className="text-[#3E058A]">Zero Risk</span>
            </h3>
            <p className="text-md mb-4 text-center text-gray-600">
              7 days money back guarantee. No questions asked.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-4"
            >
              {/* Email */}
              <div>
                <label className="text-black font-medium text-md">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#5956D6] outline-none transition text-lg"
                  placeholder="Enter your email"
                />
              </div>

              {/* Name */}
              <div>
                <label className="text-black font-medium text-md">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#5956D6] outline-none transition text-lg"
                  placeholder="Enter your name"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="text-black font-medium text-md">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#5956D6] outline-none transition text-lg"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-black font-medium text-md">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="Phone number must be 10 digits."
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#5956D6] outline-none transition text-lg"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Company Size */}
              <div>
                <label className="text-black font-medium text-md">
                  Company Size
                </label>
                <input
                  type="number"
                  name="companysize"
                  value={formData.companysize}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#5956D6] outline-none transition text-lg"
                  placeholder="Number of employees"
                />
              </div>

              {/* Product Interest */}
              <div>
                <label className="text-black font-medium text-md">
                  Interested Product
                </label>
                <select
                  name="intrestproduct"
                  required
                  value={formData.intrestproduct}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#5956D6] outline-none transition text-lg"
                >
                  <option value="">Select a Product</option>
                  <option value="SMS">SMS</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="RCS">RCS</option>
                  <option value="Email">Email</option>
                  <option value="Voice">Voice</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-black font-medium text-md">
                  Message
                </label>
                <textarea
                  name="msg"
                  rows={3}
                  required
                  value={formData.msg}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#5956D6] outline-none transition text-lg"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Agreement */}
              <div className="md:col-span-2 flex items-start gap-2 mt-4">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-600 text-md leading-tight">
                  I agree to receive communication on newsletters, promotional
                  content, offers and events through SMS, RCS, WhatsApp.
                </span>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#5956D6] hover:bg-[#3E058A] text-white font-bold py-3 px-5 rounded-lg w-full transition duration-300 ease-in-out shadow-md ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Contact Us"}
                </button>
              </div>
            </form>

            {/* Response Message */}
            {responseMessage && (
              <p
                className={`text-sm mt-3 text-center font-medium ${
                  responseMessage.type === "success"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {responseMessage.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PopupForm;
