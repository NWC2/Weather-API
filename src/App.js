import React, { Component } from "react";
import Search from "./components/Search";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import pc from "./img/weather-icons/partlycloudy.svg";
import mc from "./img/weather-icons/mostlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";


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

    <div>
          <header> 
      <input type="text" id="inputCity" placeholder="Type a city in here"></input>
        <button>Find Weather </button>

     </header>


<main>
<img className="mainImage" src={mc}></img>
<h2 className="mainTitle"> overcast clouds</h2>
<br></br>
<h2 className="mainTemp"> Temperature&nbsp;&nbsp; 10&deg; to 11&deg; C</h2>
<br></br>
<h2 className="mainHumidityPressure"> Humidity&nbsp;&nbsp; 78% &nbsp;&nbsp; Pressure &nbsp;&nbsp;1008.48</h2>




</main>

    </div>
  
    );
  }
}

export default App;
