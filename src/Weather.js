import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather {

}

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
  Search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

function Search() {
  const apiKey = "7d81cb66d2a78969cfec2f704335508f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

if (weatherData.ready) {
  return (
        <div className="row">
        <div className="col-7">
          <h1>☀️ 73°F</h1>
          <h4>Washington, D.C</h4>
          <h5>Sunny</h5>
        </div>
        <div className="col-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                placeholder="Enter a city"
                autocomplete="on"
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </form>
        <hr/>
        <ul className="date-time">
          <li>
            Thursday June 23
          </li>
          <li>
            5:00pm
          </li>
        </ul>
        <hr/>
        <ul>
          <li>
            Humditiy:
          </li>
          <li>
            Wind:
          </li>
          <li>Percipitation:</li>
        </ul>
        </div>
      </div>
  );
}


