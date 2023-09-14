import React from "react";
import Search from "./components/Search";

import { CurrentWeather, WeatherItem } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import Nav from "./components/Nav";
import WeatherNow from "./components/WeatherNow";
import HourlyWeather from "./components/HourlyWeather";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <WeatherNow />
        <HourlyWeather />
      </main>
    </div>
  );
}

export default App;
