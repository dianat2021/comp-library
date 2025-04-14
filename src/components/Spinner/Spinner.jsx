import styles from "./Spinner.module.css";

const Spinner = ({ spinnerClassName }) => {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <div className={`${styles.spinnerCircle} ${spinnerClassName}`}></div>
      </div>
    </>
  );
};

export default Spinner;
