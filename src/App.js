import React from "react";
import Search from "./components/Search";
import { CurrentWeather, WeatherItem } from "./components/WeatherItem"
import fakeWeatherData from "./fakeWeatherData.json";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg"
import partlycloudy from "./img/weather-icons/partlycloudy.svg"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import "./App.css";
function App() {
  return (
    <div className="app">
      
      <div id="wrapper">
        <header>

          <input type="text" name="country" id="country" placeholder="london" />
          <input type="text" name="country" id="country" placeholder="Type in a City Name" />
          <input class="button" type="submit" value="FIND WEATHER"></input>
        </header>

        <main>
          <section class="currentweather">
            <img class="bodyimg" src={mostlycloudy} alt="weatherimg" />
            <div id="title">overcast Clouds</div>
            <p className="temp"><span className="weatherTemp">Temperature</span>  10&deg;C to 11&deg;C </p>
            <p className="climatemetrics">
              <span className="a">Humidity </span><span>78%</span><span className="a">Pressure </span>1<span>00.48</span>
            </p>
          </section>
          <section class="dayweather">
            <article class="timedata">
              <time class="time" datetime="hh:mm">3:00</time>
              <img class="weatherimg" src={mostlycloudy} alt="weatherimg" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">8&deg;C </span>
            </article>