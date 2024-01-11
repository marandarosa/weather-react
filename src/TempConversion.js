import React, { useState } from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("imperial");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <span className="TempConversion">
        <h2>{Math.round(props.fahrenheit)}</h2>
        <span className="unit">
          °F
          {"  "}|{"  "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="TempConversion">
        <h2>{Math.round(((props.fahrenheit - 32) * 5) / 9)}</h2>
        <span className="unit">
          °C{"  "}|{"  "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  }
}
