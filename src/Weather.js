import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      city: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });
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
        <h1>Weather App</h1>
        <form onSubmit={submitCity}>
          <input
            type="search"
            placeholder="Enter city name.."
            autofocus="on"
            onChange={changeCity}
          />
          <input type="submit" value="Search" />
        </form>
        <br />
        <ul>
          <li>
            <strong>{weatherData.city}</strong>
          </li>
          <li>Temperature: {Math.round(weatherData.temp)}°F</li>
          <li>Description: {weatherData.description}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {Math.round(weatherData.windSpeed)}mph</li>
          <img src={weatherData.icon} alt={weatherData.description} />
        </ul>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
