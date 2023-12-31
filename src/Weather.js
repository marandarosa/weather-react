import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      city: response.data.name,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });

    console.log(response.data);
  }

  function submitCity(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6643c7326a4c2a38838264a28531d97e&units=imperial`;
    axios.get(weatherUrl).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={submitCity}>
          <input
            type="search"
            placeholder="Enter city name.."
            autoFocus="on"
            onChange={changeCity}
          />
          <input type="submit" value="Search" />
        </form>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <h1>{weatherData.city}</h1>
                </li>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li>{weatherData.description}</li>
                <li>
                  <img src={weatherData.icon} alt={weatherData.description} />
                  <h1>{Math.round(weatherData.temp)}°F</h1>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.windSpeed)}mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
