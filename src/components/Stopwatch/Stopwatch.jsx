import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Stopwatch.module.css";
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  let interval;
  useEffect(() => {
    if (!isRunning) return;

    interval = setInterval(() => {
      setTime((prevTime) => {
        let newMilliseconds = prevTime.milliseconds + 10;
        let newSeconds = prevTime.seconds;
        let newMinutes = prevTime.minutes;

        if (newMilliseconds >= 1000) {
          newMilliseconds = 0;
          newSeconds += 1;
        }

        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
        }

        return {
          minutes: newMinutes,
          seconds: newSeconds,
          milliseconds: newMilliseconds,
        };
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning]);
  return (
    <div className={styles.stopwatchContainer}>
      <div className={styles.timerLogoContainer}>
        <img
          src="/timer.svg"
          alt="timer icon"
          className={`${styles.timerLogo} ${isRunning && styles.runningLogo}`}
        />
      </div>
      <div className={styles.timerContainer}>
        <span className={styles.minutes}>
          {time.minutes > 9 ? time.minutes : `0${time.minutes}`}
        </span>
        :
        <span className={styles.seconds}>
          {time.seconds > 9 ? time.seconds : `0${time.seconds}`}
        </span>
        :
        <span className={styles.milliseconds}>
          {String(time.milliseconds).padStart(3, "0")}
        </span>
      </div>
      <div className={styles.controlsContainer}>
        <Button
          className={styles.controlButton}
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Start
        </Button>
        <Button
          className={styles.controlButton}
          onClick={() => setIsRunning(false)}
        >
          Pause
        </Button>
        <Button
          className={styles.controlButton}
          onClick={() => {
            setIsRunning(false);
            setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;
