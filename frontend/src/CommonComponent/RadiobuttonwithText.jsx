import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

function RadiobuttonwithText({ text }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      {/* Checkmark Icon */}
      <span className="text-primary text-xl flex-shrink-0 text-primery">
        <FaCheckCircle />
      </span>
      {/* Text */}
      <span className="text-gray-700 text-sm leading-normal">{text}</span>
    </div>
  );
}

// PropTypes for validation
RadiobuttonwithText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RadiobuttonwithText;
