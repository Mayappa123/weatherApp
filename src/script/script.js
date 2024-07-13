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

  console.log(`Temperature in Kelvin: ${temperatureKelvin}`);
  console.log(`Temperature in Celsius: ${temperatureCelsius}`);

  weatherResult.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${temperatureCelsius}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;

  let backgroundUrl;

  if (temperatureCelsius >= 35) {
    // Summer
    backgroundUrl =
      "https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.webp?b=1&s=170667a&w=0&k=20&c=Zrx6fhLi6mYYJylYQsbYr09ozyNsgAYfNolc_pUgmMY=";
  } else if (temperatureCelsius < 35 && temperatureCelsius >= 10) {
    // Rainy
    backgroundUrl =
      "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  } else {
    // Winter
    backgroundUrl =
      "https://images.unsplash.com/photo-1517166357932-d20495eeffd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vd2luZ3xlbnwwfHwwfHx8MA%3D%3D";
  }

  console.log(`Selected background URL: ${backgroundUrl}`);
  document.body.style.backgroundImage = `url(${backgroundUrl})`;
}

window.getWeather = getWeather;
