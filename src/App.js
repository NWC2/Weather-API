import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rafik"
    };
  }


  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className = "app">
      <div className="header">
          <form>
          <input type="text" placeholder="London"></input>

          <button type="submit">FIND WEATHER</button>
          </form>
        </div>
        <div className="content">
          <img></img>
          <h2>Temperature</h2>

          <h3>Humidity</h3>
          <h3>Pressure</h3>
        </div>

        <div className="details">
        </div>
        </div>
    );
  }
}

export default App;
