import { useEffect, useState } from "react";
import styles from "./WeatherItem.module.css";

const WeatherIte = ({ day }) => {
  // Good usage of useEffect (you're calling the setDayOfWeek function during the render phase of the component.)
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const date = new Date(day.date);
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    setDayOfWeek(dayName);
  }, [day]);

  return (
    <div className={styles.weatherItemContainer}>
      <h3>{dayOfWeek}</h3>
      <span>
        <img src={day.day.condition.icon} alt="Weather forecast icon" />
      </span>
      <p>Max:{Math.round(day.day.maxtemp_c)}&deg;</p>
      <p>Min:{Math.round(day.day.mintemp_c)}&deg;</p>
    </div>
  );
};

export default WeatherIte;
// While the use of useEffect is correct in principle,
// using an empty dependency array [] means the useEffect hook will only run once—when the component initially mounts.
// It won't update the dayOfWeek if the day prop changes later.
