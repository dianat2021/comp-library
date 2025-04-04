import { useEffect, useState } from "react";
import styles from "./WeatherWidget.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherItem from "../WeatherItem/WeatherItem";
const WeatherWidget = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherForecastData, setWeatherForecastData] = useState(null);

  const fetchWeatherCondition = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/weather?q=${searchQuery}`
      );
      const result = await response.json();
      setWeatherForecastData(result);
      console.log(result);
    } catch (error) {
      console.log(error, "error fetching data");
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
      {weatherForecastData && (
        <div className={styles.weatherBasicInfo}>
          <div className={styles.locationDetails}>
            <span className={styles.locationIcon}>
              <FontAwesomeIcon icon={faLocationDot} size="2xl" />
            </span>
            <p className={styles.cityName}>
              {weatherForecastData.location.name}
            </p>
            <p className={styles.countryName}>
              {weatherForecastData.location.country}
            </p>
          </div>

          <div className={styles.tempDetails}>
            <span className={styles.currentWeatherIcon}>
              <img
                src={weatherForecastData.current.condition.icon}
                alt="Current weather icon"
              />
            </span>
            <p className={styles.temperature}>
              {Math.round(weatherForecastData.current.temp_c)}&deg;C
            </p>
            <p className={styles.currentCondition}>
              {weatherForecastData.current.condition.text}
            </p>
          </div>
        </div>
      )}
      <hr />
      <ul className={styles.forecastContainer}>
        {weatherForecastData &&
          weatherForecastData.forecast.forecastday.map((day) => {
            return <WeatherItem day={day} />;
          })}
      </ul>
    </div>
  );
};

export default WeatherWidget;
