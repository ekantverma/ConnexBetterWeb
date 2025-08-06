import { CommonHeading } from "../CommonComponent/CommonHeading";
import RadiobuttonwithText from "../CommonComponent/RadiobuttonwithText";
import { useState } from "react";
import axios from "axios";
import truecallerlogo from "../assets/HomeImage/IMAGE/truecallerlogo.png";
import metalogo from "../assets/HomeImage/IMAGE/metalogo.png";
import BrandSection from "../CommonComponent/BrandSection";
import ShimmerUI from "../Component/ShimmerUI";
import { Suspense } from "react";
import { Brandimage } from "../Constant/Homedata.js";

function Career() {
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

  const LazyComponent = ({ Component, props = {} }) => (
    <Suspense fallback={<ShimmerUI />}>
      <Component {...props} />
    </Suspense>
  );

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
    <section className="pt-6 mx-16 md:mx-20 lg:mx-24 xl:mx-32">
      <CommonHeading h="Explore a Career With Us" width="full" />
      <div className="container mx-auto px-4 py-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left Section */}
          <div className="flex flex-col gap-10">
            {/* Heading and Radio Options */}
            <div className="space-y-4">
              <CommonHeading
                p="Join Connex Better and be part of a team that's transforming communication. Grow your career, share your ideas, and make an impact with innovative solutions. Explore our open roles today!"
                width="full"
              />
            </div>

            {/* Contact Info Box */}
            <div className="w-full bg-[#3E058A] bg-opacity-90 rounded-xl text-white p-6 sm:p-8 max-w-4xl mx-auto shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Inquiries Section */}
                <div>
                  <p className="text-xl text-white opacity-80">
                    More inquiries:
                  </p>
                  <p className="ttext-lg font-semibold text-white">
                    Support@connexbetter.com
                  </p>
                </div>

                {/* Address Section */}
                <div>
                  <p className="ttext-xl text-white opacity-80">
                    Connex Better Headquarters:
                  </p>
                  <p className="text-lg font-semibold leading-relaxed text-white">
                    Innov8, 3rd Floor, Plot No. 211,
                    <br />
                    Okhla Phase 3, Delhi, Delhi 110020, IN
                  </p>
                </div>
              </div>
            </div>

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
                  className="flex flex-col items-center gap-1 px-3 py-3 rounded-xl border border-[#D5D1D1] bg-white shadow-md w-[90px]"
                >
                  <p className="text-blue-700 font-semibold text-center leading-snug text-sm">
                    {item.heading} <br /> {item.bold}
                  </p>
                  <p className="text-[10px] text-gray-500 text-center">
                    {item.sub}
                  </p>
                </div>
              ))}

              <div className="flex items-center justify-center p-2 rounded-xl border border-[#D5D1D1] bg-white shadow-md w-[90px] h-[90px]">
                <img src={metalogo} alt="Meta logo" className="max-h-[80px]" />
              </div>

              <div className="flex items-center justify-center p-2 rounded-xl border border-[#D5D1D1] bg-white shadow-md w-[90px] h-[90px]">
                <img
                  src={truecallerlogo}
                  alt="Truecaller logo"
                  className="max-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Get Started Risk Free
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                7 days money back guarantee. No questions asked.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <form
                onSubmit={handleSubmit}
                className="col-span-full grid grid-cols-2 gap-5"
              >
                {/* Email */}
                <div>
                  <label className="text-black font-semibold text-sm sm:text-base">
                    Email <span className="text-red-500">*</span>
                  </label>
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

                {/* Name */}
                <div>
                  <label className="text-black font-semibold text-sm sm:text-base">
                    Your Name <span className="text-red-500">*</span>
                  </label>
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

                {/* Company Name */}
                <div>
                  <label className="text-black font-semibold text-sm sm:text-base">
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

                {/* Phone */}
                <div>
                  <label className="text-black font-semibold text-sm sm:text-base">
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
                    className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Company Size */}
                <div>
                  <label className="text-black font-semibold text-sm sm:text-base">
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

                {/* Product Interest */}
                <div>
                  <label className="text-black font-semibold text-sm sm:text-base">
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

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="text-black font-semibold text-sm sm:text-base">
                    Message
                  </label>
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

                {/* Agreement */}
                <div className="md:col-span-2 flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700 text-sm">
                    By clicking "Contact Us," I agree to receive communication
                    on newsletters, promotional content, offers, and events
                    through SMS, RCS, WhatsApp.
                  </span>
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-[#5956D6] hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg w-full transition duration-300 ease-in-out ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Submitting..." : "Contact Us"}
                  </button>
                </div>
              </form>
            </div>

            {/* Response Message */}
            {responseMessage && (
              <p
                className={`text-sm mt-3 text-center ${
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
      </div>

      <div className="w-full mx-0">
        {/* Header Section */}
        <div className="px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-700 animate-fade-in-up">
            Trusted by 1100+ Businesses
          </h2>
        </div>

        {/* Brand Section */}
        <div className="px-4 my-4">
          <LazyComponent
            Component={BrandSection}
            props={{ data: Brandimage }}
            className="animate-fade-in-up"
          />
        </div>

        {/* Stats Cards Section */}
        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-8 sm:px-6 flex flex-col items-center justify-center text-center">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                10<span className="text-[#5956D6]">+</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                Registered Users
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-8 sm:px-6 flex flex-col items-center justify-center text-center">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                254<span className="text-[#5956D6]">+</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                Millions Voice Pulses Annually
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-8 sm:px-6 flex flex-col items-center justify-center text-center">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                99.9<span className="text-[#5956D6]">%</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                API Uptime
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-8 sm:px-6 flex flex-col items-center justify-center text-center">
              <p className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-black">
                600<span className="text-[#5956D6]">+</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1">
                Operators Connections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
