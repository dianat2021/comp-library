import { useEffect, useState } from "react";
import styles from "./WeatherWidget.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const WeatherWidget = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentWeatherCondition, setCurrentWeatherCondition] = useState(null);
  const fetchWeatherCondition = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/weather?q=${searchQuery}`
      );
      const result = await response.json();
      setCurrentWeatherCondition(result);
      console.log(result);
    } catch (error) {
      console.log(error, "error fetching data");
    }
  };

  useEffect(() => {
    fetchWeatherCondition();
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
        />
        <Button className={styles.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </div>
      {currentWeatherCondition && (
        <div className={styles.weatherBasicInfo}>
          <div className={styles.locationDetails}>
            <span className={styles.locationIcon}>
              <FontAwesomeIcon icon={faLocationDot} size="2xl" />
            </span>
            <p className={styles.cityName}>
              {currentWeatherCondition.location.name}
            </p>
            <p className={styles.countryName}>
              {currentWeatherCondition.location.country}
            </p>
          </div>

          <div className={styles.tempDetails}>
            <span className={styles.currentWeatherIcon}>
              <img
                src={currentWeatherCondition.current.condition.icon}
                alt="Current weather icon"
              />
            </span>
            <p className={styles.temperature}>
              {Math.round(currentWeatherCondition.current.temp_c)}&deg;C
            </p>
            <p className={styles.currentCondition}>
              {currentWeatherCondition.current.condition.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
