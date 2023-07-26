import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <h1>Weather Forecast</h1>
          <Weather />
        </div>
        <div className="footer">
          <small>
            This project was coded by
            <a
              href="https://www.linkedin.com/in/olena-myronenko-ua/"
              target="blank"
              className="footer-link"
            >
              {" "}
              Olena Myronenko{" "}
            </a>
            ans is{" "}
            <a
              href="https://github.com/Olena-Myr/weather-app-react"
              target="blank"
              className="footer-link"
            >
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://clever-melba-08c4cd.netlify.app/"
              target="blank"
              className="footer-link"
            >
              hosted on Netlify
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
