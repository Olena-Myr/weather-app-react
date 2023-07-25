import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <ReactAnimatedWeather icon="CLEAR_DAY" size={30}></ReactAnimatedWeather>
  );
}
