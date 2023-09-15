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
import WeatherItem from "./components/WeatherItem";

  function App() {
    const [data, setData] = useState(fakeWeatherData);
    //const [loading, setLoading]= useState(false);
    const searchForWeather= (searchInput)=>{

      const apiKey = 'a623d23ca26596f50a965ac4c3025dff'; 
      // Fetch data from the API when the button is clicked
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&cnt=8&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  
    }

    
  // handleInputChange = value => {
  //   this.setState({ name: value });
  // };
  // render() {

  


    return (

      <div className="app">
      <main>
      <Head searchForWeather={searchForWeather}/>
      <Section2 data={data}/>
      <Table data={fakeWeatherData}/>
      
      </main>
      </div>
      )



}
export default App;
