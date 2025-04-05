import { useEffect, useState } from "react";
import styles from "./WeatherItem.module.css";

const WeatherIte = ({ day }) => {
  // Good usage of useEffect (you're calling the setDayOfWeek function during the render phase of the component.)
  const [forecastDay, setForecastDay] = useState("");

  useEffect(() => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(day.date);
    const weekday = weekdays[date.getDay()];

    // Get the day of the month
    const dayOfMonth = date.getDate();

    // Add suffix (st, nd, rd, th) based on dayOfMonth of the month
    // Determine the suffix for the day of the month
    let suffix = "th";
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
      suffix = "st";
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
      suffix = "nd";
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
      suffix = "rd";
    }

    const formattedDate = `${weekday} ${dayOfMonth}${suffix}`;
    setForecastDay(formattedDate);
  }, [day]);

  return (
    <div className={styles.weatherItemContainer}>
      <h4>{forecastDay}</h4>
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
