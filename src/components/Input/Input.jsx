import styles from "./Input.module.css";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  className,
  id,
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        id={id}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
