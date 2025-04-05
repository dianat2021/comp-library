import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  if (!message) return null; // Return nothing if no error message

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
