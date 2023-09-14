import React from "react";

import Nav from "./components/Nav";
import WeatherNow from "./components/WeatherNow";
import HourlyWeather from "./components/HourlyWeather";
import FakeWeather from "./fakeWeatherData.json";

import "./App.css";
const fake = FakeWeather
console.log(fake)
// console.log(FakeWeather)
function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <WeatherNow  fake={fake}/>
        <HourlyWeather fake = {fake}/>
      </main>
    </div>
  );
}

export default App;
