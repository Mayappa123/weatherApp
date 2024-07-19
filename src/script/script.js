async function getWeather() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const city = document.getElementById("city-input").value;
  const result = document.getElementsByClassName("weather-result")[0];

  if (!city) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Please enter a city name";
    result.innerHTML = "";
    result.appendChild(errorMessage);
    setTimeout(() => {
      errorMessage.classList.add("hidden");
      setTimeout(() => {
        result.removeChild(errorMessage);
      }, 1500);
    }, 1500);
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Invalid city name");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error.message;
    result.innerHTML = "";
    result.appendChild(errorMessage);
    setTimeout(() => {
      result.removeChild(errorMessage);
    }, 1500);
  }
}

function displayWeather(data) {
  const weatherResult = document.getElementById("weather-result");
  const temperatureKelvin = data.main.temp;
  const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);

  weatherResult.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${temperatureCelsius}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;

  document
    .getElementById("clear-button")
    .addEventListener("click", clearWeather);

  document.getElementById("clear-button").style.display = "block";
}

function clearWeather() {
  document.getElementById("weather-result").innerHTML = "";
  document.getElementById("city-input").value = "";
  document.getElementById("clear-button").style.display = "none";
}

window.getWeather = getWeather;
