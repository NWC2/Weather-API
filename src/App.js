import React, { Component } from "react";
import Search from "./components/Search";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import pc from "./img/weather-icons/partlycloudy.svg";
import mc from "./img/weather-icons/mostlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";


import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "alialahmad_MohammadAlAgha"
  //   };
  // }

  // handleInputChange = value => {
  //   this.setState({ name: value });
  // };

  render() {
    return (
      // <div className="app">
      //   /* <SayHi />
      //   <SayHello color="black" name={this.state.name} />
      //   <Search handleInput={this.handleInputChange} /> */
      // </div>

    <div>
              <header>
      <input type="text" placeholder="Type in a city name" name="city-name" id="city-name" />
        <button className="find-weather" onclick="" > FIND WEATHER</button>

      </header>
      <div className="img-mc">
        <img src={mc} className="mostly-cloudy" />
        <h2 className="mc-text">overcast clouds</h2>
      </div>
      <div className="temp-data">
        <p><b>Temperature&nbsp;</b>&nbsp;10&deg; to 11&deg;C</p>
      </div>
      <div className="humidity-pressure">
        <p className="humidity"><b>Humidity&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;78%</p>
        <p className="pressure"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressure&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;1008.48</p>
      </div>
     
      <footer> 
        <div className="daily-weather">
          <p>03:00</p>
          <img src={mc}/>
          <p>8&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>06:00</p>
          <img src={mc}/>
          <p>9&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>09:00</p>
          <img src={clear}/>
          <p>14&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>12:00</p>
          <img src={clear}/>
          <p>17&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>15:00</p>
          <img src={clear}/>
          <p>18&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>18:00</p>
          <img src={clear}/>
          <p>16&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>21:00</p>
          <img src={mc}/>
          <p>13&deg;C</p>
        </div>
        </footer>
    </div>
  
    );
  }
}

export default App;
