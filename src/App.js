import React, { useState } from "react";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  let [city, setCity] = useState(null);
  let [cityDisplay, setCityDisplay] = useState(null);

  function submitCity(event) {
    event.preventDefault();
    setCityDisplay(city);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={submitCity}>
        <input
          type="search"
          placeholder="Enter city name.."
          onChange={changeCity}
        />
        <input type="submit" value="Search" />
      </form>
      <br />
      {cityDisplay && <Weather city={cityDisplay} />}
    </div>
  );
}
