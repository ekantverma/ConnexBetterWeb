import { NavLink } from "react-router-dom";
import { footerpart } from "../Constant/NavandFooter";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { memo } from "react";

export const Footer = memo(() => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 py-10 text-lg text-gray-300 mt-10">
      <section className="container mx-auto px-6">
        {/* Footer Links */}
        <div className="grid gap-6 md:grid-cols-4 justify-center border-b border-gray-700 pb-8">
          {footerpart.map((ele, ind) =>
            ind === 0 ? (
              <div key={ind}>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={ele.h}
                    alt="logo"
                    loading="lazy"
                    className="h-12 w-12"
                  />
                  <div className="text-2xl font-semibold text-white">
                    Connex Better
                  </div>
                </div>
                <ul className="space-y-2">
                  {[ele.l1, ele.l2, ele.l3, ele.l4, ele.l5].map(
                    (item, idx) =>
                      item.text && (
                        <li key={idx} className="hover:text-blue-400 transition-all duration-200">
                          <NavLink to={item.link} onClick={handleClick}>
                            {item.text}
                          </NavLink>
                        </li>
                      )
                  )}
                </ul>
              </div>
            ) : (
              <div key={ind}>
                <div className="text-xl font-semibold text-white mb-3">{ele.h}</div>
                <ul className="space-y-2">
                  {[ele.l1, ele.l2, ele.l3, ele.l4, ele.l5].map(
                    (item, idx) =>
                      item.text && (
                        <li key={idx} className="hover:text-blue-400 transition-all duration-200">
                          <NavLink to={item.link} onClick={handleClick}>
                            {item.text}
                          </NavLink>
                        </li>
                      )
                  )}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-gray-400 text-sm">
            © 2025 Connex Integrations Private Limited. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/connex-better/posts/?feedView=all"
              className="text-3xl text-blue-400 hover:text-white transition-all duration-300"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/connex.better/"
              className="text-3xl text-blue-500 hover:text-white transition-all duration-300"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/connexbetter08/"
              className="text-3xl text-pink-500 hover:text-white transition-all duration-300"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="http://www.youtube.com/@ConnexBetter"
              className="text-3xl text-red-500 hover:text-white transition-all duration-300"
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/connexbetter"
              className="text-3xl text-gray-400 hover:text-white transition-all duration-300"
              target="_blank"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
});
