import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

function WeatherNow({ fake }) {
  let tempMax = parseInt(fake.list[0].main.temp_max - 273.15);
  let tempMin = parseInt(fake.list[0].main.temp_min - 273.15);

  return (
    <section class="currentweather">
      <img class="bodyimg" src={mostlycloudy} alt="weatherimg" />
      <div id="title">overcast Clouds</div>
      <p className="temp">
        <span className="weatherTemp">Temperature</span> {tempMin} &deg;C to{" "}
        {tempMax} &deg;C{" "}
      </p>

      <p className="climatemetrics">
        <span className="a">humidity</span>
        <span>{fake.list[0].main.humidity} %</span>

        <span className="a">Pressure </span>
        <span>{fake.list[0].main.pressure}</span>
      </p>
    </section>
  );
}

export default WeatherNow;
