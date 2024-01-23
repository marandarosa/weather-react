import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div>{props.data.dt}</div>
      <div className="icon mt-1">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div>
        <span>
          <strong>{Math.round(props.data.temp.max)}°</strong>
        </span>{" "}
        <span>{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
