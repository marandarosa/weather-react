import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
