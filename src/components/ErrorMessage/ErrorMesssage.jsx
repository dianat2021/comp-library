import styles from "./ErrorMessage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = ({ message }) => {
  if (!message) return null; // Return nothing if no error message

  return (
    <div className={styles.errorContainer}>
      <span>
        <img src="/error.svg" alt="error icon" />
      </span>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
