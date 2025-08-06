import { NavLink } from "react-router-dom";
import { MdEmail, MdMessage, MdCall, MdApi } from "react-icons/md";

const DevelopersDropdown = ({ dropdown }) => {
  return (
    <div className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] p-6 z-50 ${dropdown ? "block" : "hidden"}`}>
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-900">Developers</p>
        <hr className="mt-1 border-gray-300" />
      </div>

      <div className="min-w-[300px] mt-4">
        <p className="text-lg font-bold text-black mb-3">API</p>
        <ul className="space-y-2">
          <DropdownLink to="/Developers/EmailAPI" icon={<MdEmail />} label="Email API" />
          <DropdownLink to="/Developers/SMSAPI" icon={<MdMessage />} label="Bulk SMS API" />
          <DropdownLink to="/Developers/VoiceAPI" icon={<MdCall />} label="Voice API" />
          <DropdownLink to="/Developers/WhatsdocsApi" icon={<MdApi />} label="WhatsApp API" />
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

export default DevelopersDropdown;
