import { NavLink } from "react-router-dom";
import { footerpart } from "../Constant/NavandFooter";
import { FaLinkedin,FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { memo } from "react";
export const Footer = memo(() => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
return (
    <footer className=" bg-secondary py-8 text-xl">
      <section>
        <div className="grid gap-3 md:grid-cols-4 justify-center border-b-2">
          {footerpart.map((ele, ind) => {
            return ind === 0 ? (
              <div key={ind}>
                <div id="logo" className="flex items-center gap-2 mb-3">
                  <img src={ele.h} alt="logo" loading="lazy" className="h-10 w-10" />
                  <div className="text-xl">Connex Better</div>
                </div>
                {[ele.l1, ele.l2, ele.l3, ele.l4, ele.l5].map(
                  (item, idx) =>
                    item.text && (
                      <li key={idx} className="text">
                        <NavLink to={item.link} onClick={handleClick}>{item.text}</NavLink>
                      </li>
                    )
                )}
              </div>
            ) : (
              <div key={ind}>
                <ul className="text-xl mb-2">{ele.h}</ul>
                {[ele.l1, ele.l2, ele.l3, ele.l4, ele.l5].map(
                  (item, idx) =>
                    item.text && (
                      <li key={idx} className="text hover:text-primery">
                        <NavLink to={item.link} onClick={handleClick}>{item.text}</NavLink>
                      </li>
                    )
                )}
              </div>
            );
          })}
        
        </div>
        <div className="flex flex-col items-start md:flex-row justify-between md:items-center"><p className="text-black">© 2025 Connex Integrations Private Limited. All rights reserved.</p>
        <div className="flex gap-5 mt-5">
        <a href="https://www.linkedin.com/company/connex-better/posts/?feedView=all" className="text-4xl text-primery flex justify-end" target="blank"><FaLinkedin></FaLinkedin></a>
        <a href="https://www.facebook.com/connex.better/" className="text-4xl text-blue-500 flex justify-end" target="blank"><FaFacebook></FaFacebook></a>
        <a href="https://www.instagram.com/connexbetter08/" className="text-4xl text-red-400 flex justify-end" target="blank"><FaInstagram/></a>
        <a href="http://www.youtube.com/@ConnexBetter" className="text-4xl text-red-600 flex justify-end" target="blank"><FaYoutube/></a>
        <a href="https://x.com/connexbetter" className="text-4xl text-black flex justify-end" target="blank"><FaSquareXTwitter/></a>
        </div>
        </div>
      
        


      </section>

    </footer>
  );
});
