import React, { useState, useEffect } from "react";
import "../src/script/script.js";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="container">
        <h1>WEATHER APP</h1>
        <div className="date-time">
          <p>{dateTime.toLocaleDateString()}</p>
          <p>{dateTime.toLocaleTimeString()}</p>
        </div>
        <div className="search-box">
          <input type="text" id="city-input" placeholder="Enter city name" />
          <button onClick={getWeather}>Search</button>
        </div>
        <div id="weather-result" className="weather-result"></div>
        <button id="clear-button">Clear</button>
      </div>
    </>
  );
}

export default App;
