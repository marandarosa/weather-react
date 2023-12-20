import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [icon, setIcon] = useState(null);

  function displayWeather(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    console.log(response.data);
  }

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6643c7326a4c2a38838264a28531d97e&units=imperial`;
  axios.get(weatherUrl).then(displayWeather);

  return (
    <ul className="Weather">
      <li>Temperature: {Math.round(temp)}°F</li>
      <li>Description: {description}</li>
      <li>Humidity: {humidity}%</li>
      <li>Wind: {Math.round(windSpeed)}mph</li>
      <img src={icon} alt={description} />
    </ul>
  );
}
