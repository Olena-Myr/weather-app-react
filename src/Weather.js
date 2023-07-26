import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  let [error, setError] = useState(false);

  function showConditions(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleError() {
    setLoaded(true);
    setError(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError(false);
    setLoaded(false);
    let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showConditions).catch(handleError);
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city ..."
        autoFocus={true}
        onChange={showCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (error) {
    return (
      <div>
        {form}
        <p>City not found</p>
        <p>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="1.5"
            width="40"
          />{" "}
        </p>
      </div>
    );
  } else if (loaded) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                <h2>{city}</h2>
              </li>
              <li>
                <span>Monday </span>
                <span>12:00</span>
              </li>
              <li>April, 07 2023</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <img
                  src={weather.icon}
                  title={weather.description}
                  alt={weather.description}
                />
              </li>
              <li>
                <span>Humidity: {weather.humidity}%</span>
              </li>
              <li>
                <span>Wind: {Math.round(weather.wind)} km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="temperature-style">
              <span className="temperature">
                {Math.round(weather.temperature)}{" "}
              </span>
              <span className="units">
                <a href="/">°C </a>|<a href="/">°F </a>
              </span>
            </ul>
          </div>
          <Forecast />
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
