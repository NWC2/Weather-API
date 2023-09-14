import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlyCloudy from '../src/img/weather-icons/mostlycloudy.svg';
import "./App.css";
import clear from '../src/img/weather-icons/clear.svg'
import Head from './components/Header';
import Section2 from './components/Section2';
import Table from './components/Table';

import { useState,useEffect } from "react";
// class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "Karim"
  //   };
  // }
  function App() {
    const [data, setData] = useState(null);
  // handleInputChange = value => {
  //   this.setState({ name: value });
  // };
  // render() {
    return (
      <div className="app">
      <main>
      <Head />
      <Section2 data={fakeWeatherData}/>
      <Table data={fakeWeatherData}/>
      </main>
      </div>
      )
  }



export default App;
