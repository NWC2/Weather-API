import React, { Component } from "react";
import mc from "./img/weather-icons/mostlycloudy.svg"
import Search from "./components/Search";

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

      // <div> alialahmad_MohammadAlAgha</div>
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

        </div>
      
    );


  }
}

export default App;
