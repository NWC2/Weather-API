import React, { Component, useEffect, useState } from "react";

import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import Weather24 from "./components/Weather24";
// import fakeWeather from "./data/fakeWeather.json";
// import imgClear from "./img/weather-icons/clear.svg";
// import imgCloudy from "./img/weather-icons/cloudy.svg";
// import imgDrizzle from "./img/weather-icons/drizzle.svg";
// import imgFog from "./img/weather-icons/fog.svg";
// import imgMostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
// import imgPartlyCloudy from "./img/weather-icons/partlycloudy.svg";
// import imgRain from "./img/weather-icons/rain.svg";
// import imgSnow from "./img/weather-icons/snow.svg";
// import imgStorm from "./img/weather-icons/storm.svg";
// import imgUnknow from "./img/weather-icons/unknown.svg";
import "./App.css";

const YOUR_API_KEY = "7cdf675119e030962815ed0195219cf3";

const App = () => {
  const [liveWeather, setLiveWeather] = useState();
  const [cityName, setCityName] = useState("london");

  const fetchWeatherData = () => {
    fetch(
      ` http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=${YOUR_API_KEY}`
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok ");
        }

        const data = await response.json();
        setLiveWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="app">
      {liveWeather && (
        <div id="london">
          <Search
            city={cityName}
            onChangeCity={setCityName}
            onSearch={fetchWeatherData}
          />
          <WeatherNow dataWeather={liveWeather.list} />
          <Weather24 dataWeather24={liveWeather.list} />
        </div>
      )}
    </div>
  );
};
export default App;
