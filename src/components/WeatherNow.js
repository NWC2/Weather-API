import React from "react";
import { findWeatherImage, convertToKelvin } from "../helpers";

const WeatherNow = ({ dataWeather }) => {
  return (
    <div className="content" id="london">
      <img
        class="mainImage"
        id="main-MostlyCloudy"
        src={findWeatherImage(dataWeather[0].weather[0].id)}
        alt="current weather icon"
      />
      <h3 class="t1">{dataWeather[0].weather[0].main}</h3>
      <p class="t2">
        <strong> Temperature </strong> &nbsp;&nbsp;
        {convertToKelvin(dataWeather[0].main.temp_min)} to&nbsp;
        {convertToKelvin(dataWeather[0].main.temp_max)} K
      </p>
      <p class="t3">
        <strong>Humidty</strong> &nbsp;&nbsp;{dataWeather[0].main.humidity}%
        &nbsp;&nbsp;
        <strong>Pressure</strong> &nbsp;&nbsp;{dataWeather[0].main.pressure}
      </p>
    </div>
  );
};

export default WeatherNow;
