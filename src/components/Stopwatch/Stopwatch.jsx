import Button from "../Button/Button";
import styles from "./Stopwatch.module.css";
const Stopwatch = () => {
  return (
    <div className={styles.stopwatchContainer}>
      <div className={styles.timerContainer}>
        <span>00</span>:<span>00</span>:<span>000</span>
      </div>
      <div className={styles.controlsContainer}>
        <Button className={styles.controlButton}>Start</Button>
        <Button className={styles.controlButton}>Pause</Button>
        <Button className={styles.controlButton}>Reset</Button>
      </div>
    </div>
  );
};

export default Stopwatch;
