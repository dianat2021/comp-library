import styles from "./Input.module.css";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onKeyDown,
  error,
  className,
  id,
}) => {
  return (
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
        className={`${styles.input} ${className}`}
        id={id}
        onKeyDown={onKeyDown}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </>
  );
};

export default Input;
