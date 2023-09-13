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
      <div>
        <img src={mc} className="mostly-cloudy" />
      </div>
        </div>
      
    );
  }
}

export default App;
