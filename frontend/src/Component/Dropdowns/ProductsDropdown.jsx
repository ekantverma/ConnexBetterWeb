import { NavLink } from "react-router-dom";
import {
  MdApi, MdEmail, MdMessage, MdCall, MdWifiCalling, MdShield,
  MdOutlineLanguage, MdWhatsapp, MdMarkEmailUnread, 
} from "react-icons/md";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";


const ProductsDropdown = ({ dropdown }) => {
  return (
    <div
      className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] p-6 z-50 ${
        dropdown ? "block" : "hidden"
      }`}
    >
    {/* NavLink Title */}
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-900">Products</p>
        <hr className="mt-1 border-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 min-w-[900px]">
        {/* SMS Gateway */}
        <div>
          <p className="text-xl font-bold text-black mb-3">SMS Gateway</p>
          <ul className="space-y-2">
            <NavItem to="/SMSAPI" icon={<MdMessage />} label="SMS API" />
            <NavItem to="/BulkSMS" icon={<FaEnvelopesBulk />} label="Bulk SMS" />
            <NavItem to="/InternationalSMS" icon={<MdOutlineLanguage />} label="International SMS" />
            <NavItem to="/TwoFactorAuthentication" icon={<MdShield />} label="Two Factor Auth" />
          </ul>
        </div>

        {/* WhatsApp API */}
        <div>
          <p className="text-xl font-bold text-black mb-3">Whatsapp API</p>
          <ul className="space-y-2">
            <NavItem to="/Whatsapp" icon={<MdWhatsapp />} label="WhatsApp Business API" />
          </ul>
        </div>

        {/* Voice Services */}
        <div>
          <p className="text-xl font-bold text-black mb-3">Voice Services</p>
          <ul className="space-y-2">
            <NavItem to="/Voice" icon={<MdCall />} label="Voice" />
            <NavItem to="/IVR" icon={<MdWifiCalling />} label="IVR" />
            <NavItem to="/ContactCenter" icon={<MdCall />} label="Contact Center Solution" />
            <NavItem to="/VoiceOBD" icon={<MdCall />} label="Voice OBD" />
            <NavItem to="/CallPatch" icon={<MdCall />} label="Call Masking" />
          </ul>
        </div>

        {/* RCS Messaging */}
        <div className="">
          <p className="text-xl font-bold text-black mb-3">RCS Messaging</p>
          <ul className="space-y-2 mb-20">
            <NavItem to="/RCS" icon={<LuMessagesSquare />} label="RCS Messaging" />
          </ul>

          <p className="text-xl font-bold text-black mb-3">Bulk Emails</p>
          <ul className="space-y-2">
            <NavItem to="/Email" icon={<MdMarkEmailUnread />} label="Bulk Email" />
          </ul>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <li>
    <NavLink
      to={to}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-100 text-sm transition"
    >
      <span className="text-blue-500 text-lg">{icon}</span>
      <span className="text-gray-800">{label}</span>
    </NavLink>
  </li>
);

export default ProductsDropdown;
