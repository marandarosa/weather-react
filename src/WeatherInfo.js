import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div>{props.data.description}</div>
      <div className="row mt-3">
        <div className="col-7">
          <ul>
            <li>
              <WeatherIcon code={props.data.icon} size={60} />
              <h2>{Math.round(props.data.temp)}</h2>
              <h3>°F</h3>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.windSpeed)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
