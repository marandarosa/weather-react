import React from "react";
import axios from "axios";

export default function Weather(props) {
  function doSomething(response) {
    alert(`The weather in Hartford is ${response.data.main.temp}`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6643c7326a4c2a38838264a28531d97e&units=imperial`;
  axios.get(apiUrl).then(doSomething);
  return <h2>Loading...</h2>;
}
