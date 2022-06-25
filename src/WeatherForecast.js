import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ForecastDays from "./ForecastDays.js";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {

        const apiKey = "7d81cb66d2a78969cfec2f704335508f";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
        
        axios.get(apiUrl).then(handleResponse);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <li><ForecastDays data={dailyForecast} /></li>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    } else {
        load();

        return null;
    }
}