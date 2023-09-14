import React, { Component } from "react";
import mc from "./img/weather-icons/mostlycloudy.svg"
const Main = () => {
    return (
        <main>
        <div className="img-mc">
          <img src={mc} className="mostly-cloudy" />
          <h2 className="mc-text">overcast clouds</h2>
        </div>
        <div className="temp-data">
          <p><b>Temperature&nbsp;</b>&nbsp;10&deg; to 11&deg;C</p>
        </div>
        <div className="humidity-pressure">
          <p className="humidity"><b>Humidity&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;78%</p>
          <p className="pressure"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressure&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;1008.48</p>
        </div>
       </main>
    );
  };
  
  export default Main;
  