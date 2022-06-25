import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherDate from "./WeatherDate.js";
import WeatherIcons from "./WeatherIcons.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      low: response.data.main.temp_min,
      high: response.data.main.temp_max,
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-7">
            <span className="icon">
              <WeatherIcons code={weatherData.icon} size={54}/>
            </span>{" "}
            <span>
            <WeatherTemperature temperature={weatherData.temperature}/>
            </span>
          <h4>{weatherData.city}</h4>
          <h6 className="text-capitalize">{weatherData.description}</h6>
        </div>
        <div className="col-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <hr />
          <ul className="date-time">
            <li key="index">
              <WeatherDate date={weatherData.date} />
            </li>
          </ul>
          <hr />
          <ul>
            <li key="index">Humditiy: {weatherData.humidity}%</li>
            <li key="index">Wind: {Math.round(weatherData.wind)} mph</li>
          </ul>
          <hr />
          <h6>5-day Forecast</h6>
          <ul>
              <WeatherForecast coordinates={weatherData.coordinates} />
          </ul>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
