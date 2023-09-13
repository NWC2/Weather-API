import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import cloudy from './img/weather-icons/cloudy.svg';
import clear from './img/weather-icons/clear.svg';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "abdulazi"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
        <label for="search" ></label>
        <input type="text" id="name" name="name" placeholder="Enter the city" />
        <button className="btn">FIND WEATHER</button>
        </header>
        <body>
        <main>
          <section className="container">
        <section  className="center">
        <img className="first-img" src={mostlycloudy} width={300} height={200}></img>
          <h4>overcast clouds</h4>
          <h3>Temperature <span style={{opacity:'0.7'}}>  10  to 11  C</span></h3>
          <p className="humidity"><span style={{fontWeight:"bold"}}>  Humidity  </span>  78% <span style={{fontWeight:"bold"}}> Pressure </span>  1008.48</p>
         

        </section>
       




          <section className="footer">
            <article className="wheatherItem">
              <p>03:00</p>
              <img className="imgItem" src={mostlycloudy}></img>
              <p>8 C</p>
            </article>
            <article className="wheatherItem">
              <p>03:00</p>
              <img className="imgItem" src={mostlycloudy}></img>
              <p>8 C</p>
            </article>
            <article className="wheatherItem">
              <p>03:00</p>
              <img className="imgItem" src={clear}></img>
              <p>8 C</p>
            </article>
            <article className="wheatherItem">
              <p>03:00</p>
              <img className="imgItem" src={clear}></img>
              <p>8 C</p>
            </article>
            <article className="wheatherItem">
              <p>03:00</p>
              <img className="imgItem" src={clear}></img>
              <p>8 C</p>
            </article>
            <article className="wheatherItem">
              <p>03:00</p>
              <img className="imgItem" src={clear}></img>
              <p>8 C</p>
            </article>
            <article className="wheatherItem">
              <p>03:00</p>
              <img className="imgItem" src={mostlycloudy}></img>
              <p>8 C</p>
            </article>
          </section>

         
          </section>
          </main>
         
        </body>
        
      </div>
    );
  }
}

export default App;
