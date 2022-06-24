import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherDate from "./WeatherDate.js";
import WeatherIcons from "./WeatherIcons.js";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defualtCity);

function handleResponse(response) {
  setWeatherData ({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    date: new Date(response.data.dt * 1000),
  });
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

function search() {
  const apiKey = "7d81cb66d2a78969cfec2f704335508f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

if (weatherData.ready) {
  return (
    <div className="row">
      <div className="col-7">
        <h1>
          <WeatherIcons code="{props.data.icon}" />{" "}
          <span>{Math.round(weatherData.temperature)}</span>°F
        </h1>
        <h4>{weatherData.city}</h4>
        <h5>{weatherData.description}</h5>
      </div>
      <div className="col-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </form>
        <hr />
        <ul className="date-time">
          <li>
            <WeatherDate />
          </li>
        </ul>
        <hr />
        <ul>
          <li>Humditiy: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}mph</li>
          <li>Percipitation: {weatherData.percipitation}</li>
        </ul>
      </div>
    </div>
  );
} else {
    search();
    return "Loading...";
}
}