import { useEffect, useState } from "react";
import styles from "./WeatherWidget.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherItem from "../WeatherItem/WeatherItem";
import ErrorMessage from "../ErrorMessage/ErrorMesssage";
const WeatherWidget = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [error, setError] = useState("");
  const fetchWeatherCondition = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/weather?q=${searchQuery}`
      );
      const result = await response.json();
      if (result.error || !result.location) {
        console.log(result); // shows the error object if any error occurs
        throw new Error(result.error?.message);
      }
      setWeatherForecastData(result);
      setError("");
    } catch (error) {
      setError(error.message);
      setWeatherForecastData(null);
    }
  };

  useEffect(() => {
    fetchWeatherCondition();
  }, []);

  const handleSearchClick = () => {
    if (searchQuery) {
      fetchWeatherCondition();
    }
    setSearchQuery("");
  };

  const formatCurrentDate = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);

    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    formatCurrentDate();
  }, []);
  return (
    <div className={styles.weatherWidgetContainer}>
      <div className={styles.searchContainer}>
        <Input
          type="search"
          placeholder="Enter city name"
          id="cityName"
          className={styles.weatherSearchInput}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <Button className={styles.searchButton} onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </div>

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <h4>Current forecast for {currentDate}</h4>
          <div className={styles.weatherBasicInfo}>
            <div className={styles.locationDetails}>
              <span className={styles.locationIcon}>
                <FontAwesomeIcon icon={faLocationDot} size="2xl" />
              </span>
              <p className={styles.cityName}>
                {weatherForecastData?.location?.name}
              </p>
              <p className={styles.countryName}>
                {weatherForecastData?.location?.country}
              </p>
            </div>

            <div className={styles.tempDetails}>
              <span className={styles.currentWeatherIcon}>
                <img
                  src={weatherForecastData?.current?.condition.icon}
                  alt="Current weather icon"
                />
              </span>
              <p className={styles.temperature}>
                {Math.round(weatherForecastData?.current?.temp_c)}&deg;C
              </p>
              <p className={styles.currentCondition}>
                {weatherForecastData?.current?.condition.text}
              </p>
            </div>
          </div>

          <hr />
          <div>
            <h4 className={styles.forecastHeading}>
              3-Day Temperature Overview
            </h4>

            <ul className={styles.forecastContainer}>
              {weatherForecastData &&
                weatherForecastData?.forecast?.forecastday.map((day) => {
                  return <WeatherItem day={day} key={day.date_epoch} />;
                })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;

// This checks if the API response contains an error field. If the API provides an error object or key (e.g., { "error": "City not found" }), this condition will catch it.

// Why? Some APIs don’t rely on HTTP status codes like 404 for errors. Instead, they return a 200 OK response with an error field in the payload. By checking result.error, you account for these cases.
