import PropTypes from "prop-types";

const InputField = ({ label,id, name, value, placeholder, onChange }) => {
  return (
    <div className="w-full">
      <label className="block mb-1 font-medium text-[var(--secondary)]">{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-sm p-2  border border-gray-300 rounded-md focus:outline-none  focus:ring-none"
      />
    </div>
  );
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default InputField;
