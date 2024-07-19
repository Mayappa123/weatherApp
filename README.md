# Weather App

A simple weather application built with React and Vite, allowing users to search for current weather conditions of any city using the OpenWeatherMap API.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo <a href="https://Mayappa123.github.io/weatherApp/" target="_blank">here</a>.

## Features

- Search for the current weather by city name
- Display weather information such as temperature, humidity, wind speed, and weather description
- Responsive design for a great user experience on all devices

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Mayappa123/weatherApp.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weatherApp
    ```

3. Install dependencies:

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install
    ```

4. Set up the OpenWeatherMap API key:

    Create a `.env` file in the root of your project and add your OpenWeatherMap API key:

    ```env

    VITE_API_KEY = your_openweathermap_api_key
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## Usage

1. Open the application in your browser.
2. Enter the name of the city you want to search for in the input field.
3. Press the "Get Weather" button to retrieve and display the current weather information.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
