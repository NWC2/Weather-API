import React from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg"

function CurrentWeather(){

    return(

        <section  className="center">
        <img className="first-img" src={mostlycloudy} width={300} height={200}></img>
          <h4>overcast clouds</h4>
          <h3>Temperature <span style={{opacity:'0.7'}}>  10  to 11  &deg;C</span></h3>
          <p className="humidity"><span style={{fontWeight:"bold"}}>  Humidity  </span>  78% <span style={{fontWeight:"bold"}}> Pressure </span>  1008.48</p>
         

        </section>
    )
}








export default CurrentWeather; 