// src/App.jsx
import "../src/script/script.js";

function App() {
  return (
    <>
      <div className="container">
        <h1>Weather App</h1>
        <div className="search-box">
          <input type="text" id="city-input" placeholder="Enter city name" />
          <button onClick={getWeather}>Get Weather</button>
        </div>
        <div id="weather-result" className="weather-result"></div>
      </div>
    </>
  );
}

export default App;
