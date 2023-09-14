import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import storm from './img/weather-icons/storm.svg'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdallah"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <SayHi />
        <SayHello color="black" name={this.state.name} />
        <Search handleInput={this.handleInputChange} />

        <img src={storm} alt="storm icon" />



      </div>
    );
  }
}

export default App;
