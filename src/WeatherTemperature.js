import React, { useState } from "react";

export default function WeatherTemperature(props) {
    return( 
        <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.temperature)}</span>
        <span className="main-units-temp">
        <a href="/" id="main-fahrenheit-link">
        °F
        </a>{" "}
        |{" "}
        <a href="/" id="main-celsius-link">
        °C
        </a>
        </span>
        </div>
    );
}
