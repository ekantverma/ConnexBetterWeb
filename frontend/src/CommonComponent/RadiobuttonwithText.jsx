import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

function RadiobuttonwithText({ text }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      {/* Checkmark Icon */}
      <span className="text-primary text-xl flex-shrink-0">
        <FaCheckCircle />
      </span>

      {/* Text */}
      <span
        className="text-[rgba(16,16,16,0.54)] font-afacad text-[14px] font-normal leading-[24px]"
      >
        {text}
      </span>
    </div>
  );
}

// PropTypes for validation
RadiobuttonwithText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RadiobuttonwithText;
