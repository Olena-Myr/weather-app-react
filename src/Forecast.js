import React from "react";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <ul>
            <li className="weather-forecast-date">Wednesday</li>
            <li>
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="icon"
              ></img>
            </li>
            <li>
              <span>16° </span>
              <span className="weather-forecast-temperature-min">11°</span>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="weather-forecast-date">Thursday</li>
            <li>
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="icon"
              ></img>
            </li>
            <li>
              <span>17° </span>
              <span className="weather-forecast-temperature-min">12°</span>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="weather-forecast-date">Friday</li>
            <li>
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="icon"
              ></img>
            </li>
            <li>
              <span>18° </span>
              <span className="weather-forecast-temperature-min">13°</span>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="weather-forecast-date">Saturday</li>
            <li>
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="icon"
              ></img>
            </li>
            <li>
              <span>15° </span>
              <span className="weather-forecast-temperature-min">10°</span>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="weather-forecast-date">Sunday</li>
            <li>
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="rain"
              ></img>
            </li>
            <li>
              <span>17° </span>
              <span className="weather-forecast-temperature-min">12°</span>
            </li>
          </ul>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
