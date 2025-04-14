import { useEffect, useState } from "react";
import styles from "./WeatherItem.module.css";

const WeatherItem = ({ day }) => {
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
  }); // Try empty as well
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

export default WeatherItem;

//Executed on Every Render: When setForecastDay is called outside useEffect, it runs immediately during every render phase. This causes the state (forecastDay) to update, triggering a re-render.

//Re-render Feedback Loop: Each re-render triggers the logic again, setting the state again, causing another re-render, and so on indefinitely. This feedback loop leads to an infinite cycle because there’s no mechanism, like useEffect, to control or defer the state update.

//If you don't pass any dependency array to useEffect, it runs after every render. While this won't break your application, it does lead to unnecessary execution of the code inside useEffect.
