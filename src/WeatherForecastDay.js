import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div>{day()}</div>
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
