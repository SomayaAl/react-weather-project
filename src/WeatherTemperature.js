import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === `fahrenheit`) {
    return (
      <div className="weather-temperature">
        <span className="temp">{Math.round(props.temperature)}</span>
        <span className="main-units-temp">
          °F |{" "}
          <a href="/" onClick={showCelsius} id="main-celsius-link">
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.temperature - 32) * 5) / 9;
    return (
      <div className="weather-temperature">
        <span className="temp">{Math.round(celsius)}</span>
        <span className="main-units-temp">
          <a href="/" onClick={showFahrenheit} id="main-celsius-link">
            °F
          </a> {" "}
          | °C
        </span>
      </div>
    );
  }
}
