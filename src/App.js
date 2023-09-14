import React, { Component } from "react";
import mc from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import pc from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import Search from "./components/Search";



import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
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


      // <div> alialahmad_MohammadAlAgha</div>
        <div>
      <Header />
      <Main />
      <Footer />
      

        </div>
      
    );


      ;
    }
  }

export default App;

{/* <img src={mc}/>
<p>09:00</p>
<img src={mc}/>
<p>12:00</p>
<img src={mc}/>
<p>15:00</p>
<img src={mc}/>
<p>18:00</p>
<img src={mc}/>
<p>21:00</p>
<img src={mc}/> */}