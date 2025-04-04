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
    // <div className={styles.inputContainer}>
    <>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input}  ${className}`}
        id={id}
      />
      {error && <p className={error && styles.errorText}>{error}</p>}
    </>
    // </div>
  );
};

export default Input;
