import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import background from "./Images/day.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="background-img"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="weather-content">
            <Weather defaultCity="New York" />
          </div>
          <hr />
          <footer>
            This project was coded by Somaya Albadawi and is{" "}
            <a
              href="https://github.com/SomayaAl/react-weather-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced.
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}


