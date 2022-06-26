import React from "react";
import WeatherIcon from "./WeatherIcons.js";

export default function ForecastDays(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col-8">
      <div className="forecast">
          <span> {day()}</span>
          <WeatherIcon code={props.data.weather[0].icon} size={30} />
          <span className="weather-forecast-temp">
            {maxTemp()}
            <span className="unit">°F</span>
          </span>
          <span className="weather-forecast-temp">
            {minTemp()}
            <span className="unit">°F</span>
          </span>
        </div>
    </div>
  );
}
