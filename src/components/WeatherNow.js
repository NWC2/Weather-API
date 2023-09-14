import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

function WeatherNow() {
  return (
    <section class="currentweather">
      <img class="bodyimg" src={mostlycloudy} alt="weatherimg" />
      <div id="title">overcast Clouds</div>
      <p className="temp">
        <span className="weatherTemp">Temperature</span> 10&deg;C to 11&deg;C{" "}
      </p>

      <p className="climatemetrics">
        <span className="a">Humidity </span>
        <span>78%</span>
        <span className="a">Pressure </span>1<span>00.48</span>
      </p>
    </section>
  );
}

export default WeatherNow;
