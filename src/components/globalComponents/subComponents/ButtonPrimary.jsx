import PropTypes from "prop-types"; 
const ButtonPrimary = ({ text, customClass, onClick, }) => {
  return (
    <button
      className={`px-3 py-1.5 cursor-pointer rounded text-sm text-white bg-gradient-to-r from-[var(--secondary)]  to-[var(--primary)] ${customClass}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired, 
  customClass: PropTypes.string, 
  onClick: PropTypes.func.isRequired, 
};

export default ButtonPrimary;
