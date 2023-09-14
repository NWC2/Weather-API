import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import cloudy from './img/weather-icons/cloudy.svg';
import clear from './img/weather-icons/clear.svg';
import Nav from "./components/Nav";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";

import WeatherToday from "./components/WeatherToday";
import FakeWeather from "./FakeWeather.json"

import WeatherToday from "./components/WeatherToday";
import FakeWeather from "./FakeWeather.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "abdulazi Issa Abdulrahman",
    };
  }
  

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    console.log(FakeWeather);
    return (
      <div className="app">
      
       <WeatherToday/>
       
      </div>
    );
  }
  
}


export default App;
