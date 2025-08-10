import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Custom dropdown components
import ProductsDropdown from "./Dropdowns/ProductsDropdown";
import PricingDropdown from "./Dropdowns/PricingDropdown";
import DevelopersDropdown from "./Dropdowns/DevelopersDropdown";
import AboutDropdown from "./Dropdowns/AboutDropdown";
import SolutionsDropDown from "./Dropdowns/SolutionsDropDown";

const MenuItems = ({ items, depthLevel, mobiletoggle }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
      clearTimeout(timeoutRef.current);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const onMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(false);
    }, 150);
  };

  return (
    <li
      className={`${mobiletoggle ? "pl-2" : "menu-items"}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu && items.submenu.length > 0 ? (
        <>
          <NavLink to={items.link}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
              className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {items.title}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-90">
                  ▼
                </span>
              )}
            </button>
          </NavLink>

          {/* Conditionally render the appropriate custom dropdown */}
          {items.title === "Products" && (
            <ProductsDropdown dropdown={dropdown} />
          )}
          {items.title === "Solutions" && (
            <SolutionsDropDown dropdown={dropdown} />
          )}
          {items.title === "Pricing" && <PricingDropdown dropdown={dropdown} />}
          {items.title === "Developers" && (
            <DevelopersDropdown dropdown={dropdown} />
          )}
          {items.title === "About Us" && <AboutDropdown dropdown={dropdown} />}
        </>
      ) : (
        <NavLink to={items.link}>{items.title}</NavLink>
      )}
    </li>
  );
};

export default MenuItems;
