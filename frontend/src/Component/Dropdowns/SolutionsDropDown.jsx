import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdHealthAndSafety,
  MdPayment,
  MdFlightTakeoff,
  MdHome,
  MdShoppingCart,
  MdAccountBalance,
  MdLocalShipping,
  MdHowToVote
} from "react-icons/md";

const SolutionsDropDown = ({ dropdown }) => {
  return (
    <div
      className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] p-6 z-50 ${
        dropdown ? "block" : "hidden"
      }`}
    >
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-900">Solutions</p>
        <hr className="mt-1 border-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[500px] mt-4">
        <ul className="space-y-2">
          <DropdownLink to="/solutions/healthcare" icon={<MdHealthAndSafety />} label="Healthcare" />
          <DropdownLink to="/solutions/fintech" icon={<MdPayment />} label="Fintech" />
          <DropdownLink to="/solutions/travel" icon={<MdFlightTakeoff />} label="Travel & Holidays" />
          <DropdownLink to="/solutions/realestate" icon={<MdHome />} label="Real Estate" />
        </ul>
        <ul className="space-y-2">
          <DropdownLink to="/solutions/ecommerce" icon={<MdShoppingCart />} label="Ecommerce" />
          <DropdownLink to="/solutions/bsfi" icon={<MdAccountBalance />} label="BSFI" />
          <DropdownLink to="/solutions/logistics" icon={<MdLocalShipping />} label="Logistics" />
          <DropdownLink to="/solutions/political" icon={<MdHowToVote />} label="Political" />
        </ul>
      </div>
    </div>
  );
};

const DropdownLink = ({ to, icon, label }) => (
  <li>
    <NavLink
      to={to}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-100 text-sm transition text-gray-800"
    >
      <span className="text-blue-500 text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  </li>
);

export default SolutionsDropDown;
