import React, { Component } from "react";

import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import Weather24 from "./components/Weather24";
import fakeWeather from "./data/fakeWeather.json";
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

const App = () => {
  return (
    <div className="app">
      <div id="london">
        <Search dataSearch={fakeWeather.city} />
        <WeatherNow dataWeather={fakeWeather.list} />
        <Weather24 dataWeather24={fakeWeather.list} />
      </div>
    </div>
  );
};
export default App;
