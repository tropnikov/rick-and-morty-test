import './Input.css';

export const Input = ({ filter, placeholder, handleChange }) => {
  return (
    <input
      value={filter}
      type="text"
      className="Input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
