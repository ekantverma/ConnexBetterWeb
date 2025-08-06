import { NavLink } from "react-router-dom";
import { MdAttachMoney, MdEmail, MdMessage, MdCall, MdChat } from "react-icons/md";

const PricingDropdown = ({ dropdown }) => {
  return (
    <div className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] p-6 z-50 ${dropdown ? "block" : "hidden"}`}>
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-900">Pricing</p>
        <hr className="mt-1 border-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-[700px] mt-4">
        {/* Email & SMS */}
        <div>
          <p className="text-lg font-bold text-black mb-3">Email & SMS</p>
          <ul className="space-y-2">
            <DropdownLink to="/EmailPricing" icon={<MdEmail />} label="Bulk Email Pricing" />
            <DropdownLink to="/SMSpricing" icon={<MdMessage />} label="Bulk SMS Pricing" />
          </ul>
        </div>

        {/* WhatsApp */}
        <div>
          <p className="text-lg font-bold text-black mb-3">WhatsApp API</p>
          <ul className="space-y-2">
            <DropdownLink to="/WhatsApppricing" icon={<MdChat />} label="WhatsApp Business API" />
          </ul>
        </div>

        {/* Voice & RCS */}
        <div>
          <p className="text-lg font-bold text-black mb-3">Voice & RCS</p>
          <ul className="space-y-2">
            <DropdownLink to="/Voicepricing" icon={<MdCall />} label="Voice Pricing" />
            <DropdownLink to="/RCSpricing" icon={<MdAttachMoney />} label="RCS Pricing" />
          </ul>
        </div>
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

export default PricingDropdown;
