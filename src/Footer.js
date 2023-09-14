import React, { Component } from "react";
import mc from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg";
const Footer = () => {
    return (
        <footer> 
        <div className="daily-weather">
          <p>03:00</p>
          <img src={mc}/>
          <p>8&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>06:00</p>
          <img src={mc}/>
          <p>9&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>09:00</p>
          <img src={clear}/>
          <p>14&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>12:00</p>
          <img src={clear}/>
          <p>17&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>15:00</p>
          <img src={clear}/>
          <p>18&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>18:00</p>
          <img src={clear}/>
          <p>16&deg;C</p>
        </div>
        <div className="daily-weather">
          <p>21:00</p>
          <img src={mc}/>
          <p>13&deg;C</p>
        </div>
        </footer>
    );
  };
  
  export default Footer;