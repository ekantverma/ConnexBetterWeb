import { NavLink } from "react-router-dom";
import { footerpart } from "../Constant/NavandFooter";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { memo } from "react";
import metalogo from "../assets/HomeImage/IMAGE/metalogo.png";
import truecallerlogo from "../assets/HomeImage/IMAGE/truecallerlogo.png";
import logo from "/Logo.svg";

export const Footer = memo(() => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#181719] py-8 text-white">
      <section className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-4 border-b border-white/20 pb-10">
          {footerpart.map((ele, ind) => (
            <div key={ind}>
              {ind === 0 ? (
                <>
                  <p className="text-sm font-medium text-[#FAF8F8CC] mb-8">
                    © 2025 Connex Integrations Private Limited. All rights reserved.
                  </p>

                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={logo}
                      alt="logo"
                      loading="lazy"
                      className="h-12 w-12"
                    />
                    <div className="text-2xl font-semibold text-white">
                      Connex Better
                    </div>
                  </div>

                  <p className="text-lg text-[#FAF8F8CC] mb-2 font-medium">
                    Connect Better, Engage Better
                  </p>
                  <p className="text-lg text-[#FAF8F8CC] mb-4">
                    Our services include Bulk SMS, SMS API, WhatsApp Business API, IVR,
                    RCS Messaging, and AI Chatbot.
                  </p>

                  {/* Highlight Boxes */}
                  <div className="flex flex-wrap md:flex-nowrap gap-3 mt-6">
                    <div className="flex flex-col items-center gap-1 px-2 py-2 rounded-[8px] border border-[#D5D1D1] bg-white shadow-md w-[116px] h-[70px]">
                      <p className="text-blue-700 font-semibold text-xs text-center leading-snug">
                        7 Days <br /> Free Trial
                      </p>
                      <p className="text-[10px] text-black text-center leading-tight">
                        No payment required
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-1 px-2 py-2 rounded-[8px] border border-[#D5D1D1] bg-white shadow-md w-[116px] h-[70px]">
                      <p className="text-blue-700 font-semibold text-xs text-center leading-snug">
                        An IIM- <br /> Alumni
                      </p>
                      <p className="text-[10px] text-black text-center leading-tight">
                        Founded Company
                      </p>
                    </div>

                    <div className="flex items-center justify-center p-2 rounded-[8px] border border-[#D5D1D1] bg-white shadow-md w-[116px] h-[70px]">
                      <img
                        src={metalogo}
                        alt="Meta logo"
                        className="max-h-[40px] object-contain"
                      />
                    </div>

                    <div className="flex items-center justify-center p-2 rounded-[8px] border border-[#D5D1D1] bg-white shadow-md w-[116px] h-[70px]">
                      <img
                        src={truecallerlogo}
                        alt="Truecaller logo"
                        className="max-h-[40px] object-contain"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-2xl font-semibold text-white mb-4">
                    {ele.h}
                  </div>
                  <ul className="space-y-2">
                    {[ele.l1, ele.l2, ele.l3, ele.l4, ele.l5].map(
                      (item, idx) =>
                        item.text && (
                          <li
                            key={idx}
                            className="hover:text-white transition-all duration-200 text-[#FFFFFF8A] text-lg font-medium"
                          >
                            <NavLink to={item.link} onClick={handleClick}>
                              {item.text}
                            </NavLink>
                          </li>
                        )
                    )}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="https://www.linkedin.com/company/connex-better/posts/?feedView=all"
              className="text-white text-2xl hover:text-blue-400 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/connex.better/"
              className="text-white text-2xl hover:text-blue-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/connexbetter08/"
              className="text-white text-2xl hover:text-pink-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="http://www.youtube.com/@ConnexBetter"
              className="text-white text-2xl hover:text-red-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/connexbetter"
              className="text-white text-2xl hover:text-gray-400 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
});
