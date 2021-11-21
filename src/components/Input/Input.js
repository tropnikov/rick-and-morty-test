import './Input.css';

const Input = ({ placeholder, handleChange }) => {
  return (
    <input
      type="text"
      className="Input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
