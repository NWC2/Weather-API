import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlyCloudy from '../src/img/weather-icons/mostlycloudy.svg';
import "./App.css";
import clear from '../src/img/weather-icons/clear.svg'
import Head from './components/Header';

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
      <Head />
      <div className="section 2">
      <img className="firstimage" src={mostlyCloudy}/>
      <div className="overcast">
        overcast clouds
      </div>
      <p className="temp"><b>Temperature&nbsp;</b>&nbsp;10&deg; to 11&deg;C</p>
      <p className="humidity"><b>Humidity &nbsp; </b>&nbsp;78% &nbsp;<b>    Pressure  &nbsp;</b>  100848</p>
      </div>
      </main>
      <div className="table">
        <table>
        <tr>
            <td>03:00</td>
            <td>06:00</td>
            <td>09:00</td>
            <td>12:00</td>
            <td>15:00</td>
            <td>18:00</td>
            <td>21:00</td>
        </tr>
        <tr className="secondrow">
            <td><img src={mostlyCloudy}/></td>
            <td><img src={mostlyCloudy}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={mostlyCloudy}/></td>
        </tr>
        <tr>
            <td>8&deg;C</td>
            <td>9&deg;C</td>
            <td>14&deg;C</td>
            <td>17&deg;C</td>
            <td>18&deg;C</td>
            <td>16&deg;C</td>
            <td>13&deg;C</td>
        </tr>
      </table>
      </div>
      </div>
      )
  }

}

export default App;
