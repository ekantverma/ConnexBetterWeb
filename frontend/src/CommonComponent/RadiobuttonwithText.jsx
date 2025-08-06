import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function RadiobuttonwithText({ text }) {
  return (
    <div className="flex items-start gap-1 px-3 py-2">
  {/* Checkmark Icon */}
  <span className="text-primary text-2xl flex-shrink-0 pt-[2px]">
    <IoCheckmarkCircleOutline />
  </span>

  {/* Text */}
  <span className="text-[rgba(16,16,16,0.54)] font-afacad text-[15px] font-normal leading-[1.4]">
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
