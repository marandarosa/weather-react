import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(
    function () {
      setLoaded(false);
    },
    [props.coordinates]
  );

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = `97c2f6a3b34509ac62090edc5d18d949`;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(forecastUrl).then(displayForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h4 className="text-center">Forecast</h4>
        <div className="row text-center mt-2 mb-3">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
