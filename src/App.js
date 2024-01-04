import React, { useState } from "react";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hartford" />
      </div>
    </div>
  );
}
