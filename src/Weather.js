import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

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
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
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
        <form onSubmit={submitCity}>
          <input
            type="search"
            placeholder="Enter city name.."
            autoFocus="on"
            onChange={changeCity}
            className="search-bar"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <br />
        <div className="text-center">
          <strong>6-Day Forecast</strong>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
