# XWeather

XWeather is a weather forecasting application built with React.js that allows users to search for the current weather in any city. It uses **WeatherAPI** to fetch the weather data and displays details like temperature, humidity, wind speed, and weather conditions. The app is designed for a user-friendly experience with real-time data retrieval.

## Features

- **City Search**: Allows users to search for the current weather by entering the name of a city.
- **Current Weather Display**: Shows real-time weather conditions including temperature, humidity, wind speed, and more.
- **Responsive UI**: Ensures a smooth user experience on all screen sizes.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Sai-Karthik9113/x-weather.git
   ```
2. Navigate to the project directory:
   ```
   cd x-weather
   ```
3. Install the necessary dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

## Usage

Once the app is up and running, type a city's name into the search box, click the "Search" button, and the current weather data will be displayed. 

**API Key Configuration**:
The app uses the WeatherAPI for fetching the weather information. You need to obtain an API key from [WeatherAPI](https://www.weatherapi.com/) and update it in the `SearchBox.js` file.

## Screenshots

Here’s how the XWeather app works:

**Initial View**  
![XWeather][on page load]  

**City Weather Search**  
![XWeather][city weather search]  

**Invalid Input/Error Handling**  
![XWeather][error handling]

## Technologies Used

- React.js
- Axios (for API requests)
- CSS for styling
- WeatherAPI (for weather data)

## License

This project is licensed under the MIT License.

------------
This is a student project as part of a React course assignment.


[on page load]: src/assets/images/image.png
[city weather search]: src/assets/images/20241213-1117-28.4716295_2_1.gif
[error handling]: src/assets/images/20241213-1113-49.3490742_1_1.gif