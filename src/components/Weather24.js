import React from "react";
import { findWeatherImage, convertToKelvin } from "../helpers";

const Weather24 = ({ dataWeather24 }) => {
  const partdataWeather24 = dataWeather24.slice(1, 8);

  return (
    <div className="info">
      {partdataWeather24.map((item) => (
        <section class="imageboxes" id="box1">
          <p>{item.dt_txt.split(" ")[1].slice(0, 5)}</p>
          <img
            className="infoImages"
            src={findWeatherImage(dataWeather24[0].weather[0].id)}
            alt="weather icon"
          />
          <p>{convertToKelvin(item.main.temp)} K</p>
        </section>
      ))}
    </div>
  );
};

export default Weather24;
