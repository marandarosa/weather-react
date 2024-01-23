import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = `99b8f9330a1bfba3a85e523fd3c2e528`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(forecastUrl).then(displayForecast);

  return (
    <div className="WeatherForecast">
      <div className="row text-center">
        <div className="col-sm-2">
          <div>Thu</div>
          <div className="icon">
            <WeatherIcon code="01d" />
          </div>
          <div>
            <span>
              <strong>28°</strong>
            </span>{" "}
            <span>20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
