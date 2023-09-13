import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <main role="main" class="main">
        <header>
          <nav className="nav">
              <input type="text" name="" id="" />
              <button className="button">FIND WEATHER</button>
          </nav>
          </header>
        </main>
      </div>
    );
  }
}

export default App;
