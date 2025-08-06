import { NavLink } from "react-router-dom";
import { MdInfo, MdLibraryBooks, MdContactPhone, MdCalendarToday, MdWork } from "react-icons/md";

const AboutDropdown = ({ dropdown }) => {
  return (
    <div className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.1)] p-6 z-50 ${dropdown ? "block" : "hidden"}`}>
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-900">About Us</p>
        <hr className="mt-1 border-gray-300" />
      </div>

      <div className="min-w-[300px] mt-4">
        <ul className="space-y-2">
          <DropdownLink to="/About" icon={<MdInfo />} label="About Company" />
          <DropdownLink to="/Blog" icon={<MdLibraryBooks />} label="Blog" />
          <DropdownLink to="/Contact" icon={<MdContactPhone />} label="Contact Us" />
          <DropdownLink to="/ScheduleDemo" icon={<MdCalendarToday />} label="Schedule Demo" />
          <DropdownLink to="/Career" icon={<MdWork />} label="Career" />
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

export default AboutDropdown;
