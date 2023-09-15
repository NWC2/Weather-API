import React, { Component } from "react";
// import Search from "./components/Search";
// import weatherNow from "./components/WeatherItem";
// import { weather24 } from "./components/WeatherItem";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import imgClear from "./img/weather-icons/clear.svg";
import imgCloudy from "./img/weather-icons/cloudy.svg";
import imgDrizzle from "./img/weather-icons/drizzle.svg";
import imgFog from "./img/weather-icons/fog.svg";
import imgMostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import imgPartlyCloudy from "./img/weather-icons/partlycloudy.svg";
import imgRain from "./img/weather-icons/rain.svg";
import imgSnow from "./img/weather-icons/snow.svg";
import imgStorm from "./img/weather-icons/storm.svg";
import imgUnknow from "./img/weather-icons/unknown.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdallah",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div id="london">
          <header>
            <input id="search" type="text" placeholder="london"></input>
            <button id="find">FIND WEATHER</button>
          </header>

          <div className="content" id="london">
            <img
              class="mainImage"
              id="main-MostlyCloudy"
              src={imgMostlyCloudy}
              alt="web"
            />
            <h3 class="t1">overcast clouds</h3>
            <p class="t2">
              <strong> Temperature </strong>&nbsp;&nbsp;10° to 11°C
            </p>
            <p class="t3">
              <strong>Humidty</strong> &nbsp;&nbsp; 78% &nbsp;&nbsp;
              <strong>Pressure&nbsp;&nbsp;</strong> 1008.48
            </p>
          </div>

          <div className="info" id="info-MostlyCloudy">
            <section class="imageboxes" id="box1">
              <p>03:00</p>
              <img class="infoImages" src={imgMostlyCloudy} />
              <p>8°C</p>
            </section>

            <section class="imageboxes" id="box2">
              <p>06:00</p>
              <img class="infoImages" src={imgMostlyCloudy} />
              <p>9°C</p>
            </section>

            <section class="imageboxes" id="box3">
              <p>09:00</p>
              <img class="infoImages" src={imgClear} />
              <p>14°C</p>
            </section>

            <section class="imageboxes" id="box4">
              <p>12:00</p>
              <img class="infoImages" src={imgClear} />
              <p>17°C</p>
            </section>

            <section class="imageboxes" id="box5">
              <p>15:00</p>
              <img class="infoImages" src={imgClear} />
              <p>18°C</p>
            </section>

            <section class="imageboxes" id="box6">
              <p>18:00</p>
              <img class="infoImages" src={imgClear} />
              <p>16°C</p>
            </section>

            <section class="imageboxes" id="box7">
              <p>21:00</p>
              <img class="infoImages" src={imgMostlyCloudy} />
              <p>13°C</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
