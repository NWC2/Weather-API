import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlyCloudy from '../src/img/weather-icons/mostlycloudy.svg';
import "./App.css";


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "Karim"
  //   };
  // }

  // handleInputChange = value => {
  //   this.setState({ name: value });
  // };

  render() {
    return (
      <div className="app">
      <main>
      <header>
        <input type="text" placeholder="Type in a city name"/>
        <button className="btn" onclick="">FIND WEATHER</button>
      </header>
      <img src={mostlyCloudy}/>
      <div className="overcast">
        overcast clouds
      </div>
       <div className="temp">
        Temperature
      </div>
      </main>
      
      </div>
    );
  }

}

export default App;
