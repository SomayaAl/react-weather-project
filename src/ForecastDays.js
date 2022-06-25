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
      <div>
        <ul>
          <li key="index">
            {day()} <WeatherIcon code={props.data.weather[0].icon} size={35} />{" "}
            <span className="weather-forecast-temp">{maxTemp()}</span>{" "}
            <span className="weather-forecast-temp">{minTemp()}</span>
          </li>
        </ul>
      </div>
    );
}