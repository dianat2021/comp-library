import { useState } from "react";
import styles from "./Counter.module.css";
import Button from "../Button/Button";

const Counter = ({ initialCount = 0, min = 0, max = Infinity, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    if (count < max) {
      setCount((currentCount) => currentCount + step);
    }
  };

  const handleDecrease = () => {
    if (count > min) {
      setCount((currentCount) => currentCount - step);
    }
  };

  return (
    <div className={styles.counterCard}>
      <Button
        ariaLabel="Decrease count"
        className={styles.decreaseButton}
        onClick={handleDecrease}
      >
        -
      </Button>
      <span className={styles.countDisplay}>{count}</span>
      <Button
        ariaLabel="Increase count"
        className={styles.increaseButton}
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
