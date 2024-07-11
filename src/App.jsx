import React, { useState, useEffect } from "react";
import "./App.css";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getWeather = async () => {
    const city = document.getElementById("city-input").value;
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const displayWeather = (data) => {
    const weatherResult = document.getElementById("weather-result");
    weatherResult.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  };

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
      </div>
    </>
  );
}

export default App;
