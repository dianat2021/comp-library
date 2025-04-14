import styles from "./ErrorMessage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = ({ message, errorLogo, errorLogoAlt }) => {
  if (!message) return null; // Return nothing if no error message

  return (
    <div className={styles.errorContainer}>
      <span>
        <img src={errorLogo} alt={errorLogoAlt} />
      </span>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
