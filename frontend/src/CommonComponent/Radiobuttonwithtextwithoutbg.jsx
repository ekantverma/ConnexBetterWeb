import PropTypes from "prop-types";
import { IoCheckmarkCircleSharp } from "react-icons/io5"; 

function Radiobuttonwithtextwithoubg({ text }) {
  return (
    <div className="flex items-start gap-3 px-3 py-2">
      {/* Solid Blue Checkmark Icon */}
      <span className="text-2xl flex-shrink-0 pt-[2px] text-blue-700">
        <IoCheckmarkCircleSharp />
      </span>

      {/* Text */}
      <span className="text-[rgba(0,0,0,0.80)] font-afacad text-[16px] font-normal leading-[1.4]">
        {text}
      </span>
    </div>
  );
}

// PropTypes for validation
Radiobuttonwithtextwithoubg.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Radiobuttonwithtextwithoubg;
