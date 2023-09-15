import React from "react";
import imgClear from "../img/weather-icons/clear.svg";
// import imgCloudy from “../img/weather-icons/cloudy.svg”;
// import imgDrizzle from “../img/weather-icons/drizzle.svg”;
// import imgFog from “../img/weather-icons/fog.svg”;
import imgMostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
// import imgPartlyCloudy from “../img/weather-icons/partlycloudy.svg”;
// import imgRain from “../img/weather-icons/rain.svg”;
// import imgSnow from “../img/weather-icons/snow.svg”;
// import imgStorm from “../img/weather-icons/storm.svg”;
// import imgUnknow from “../img/weather-icons/unknown.svg”;

const findImage = (temp) => imgMostlyCloudy;

const Weather24 = ({ dataWeather24 }) => {
  const partdataWeather24 = dataWeather24.slice(1, 8);

  return (
    <div className="info">
      {partdataWeather24.map((item) => (
        <section class="imageboxes" id="box1">
          <p>{item.dt_txt.split(" ")[1].slice(0, 5)}</p>
          <img className="infoImages" src={findImage()} />
          <p>{item.main.temp}°C</p>
        </section>
      ))}
    </div>
  );
};
export default Weather24;
