import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rayan",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <section className="container">
          <section className="hour one">
            <span>03:00</span>
            <img src="https://placekitten.com/200/287"></img>
            <span>8'c</span>
          </section>

          <section className="hour two">
            <span>06:00</span>
            <img src="https://placekitten.com/200/286"></img>
            <span>8'c</span>
          </section>

          <section className="hour three">
            <span>09:00</span>
            <img src="https://placekitten.com/200/140"></img>
            <span>8'c</span>
          </section>

          <section className="hour four">
            <span>12:00</span>
            <img src="https://placekitten.com/200/138"></img>
            <span>9'c</span>
          </section>

          <section className="hour five">
            <span>14:00</span>
            <img src="https://placekitten.com/200/139"></img>
            <span>17'c</span>
          </section>

          <section className="hour six">
            <span>18:00</span>
            <img src="https://placekitten.com/200/141"></img>
            <span>16'c</span>
          </section>

          <section className="hour seven">
            <span>21:00</span>
            <img src="https://placekitten.com/200/141"></img>
            <span>13'c</span>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
