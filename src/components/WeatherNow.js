import React from "react";

// import imgClear from "../img/weather-icons/clear.svg";
// import imgCloudy from "../img/weather-icons/cloudy.svg";
// import imgDrizzle from "../img/weather-icons/drizzle.svg";
// import imgFog from "../img/weather-icons/fog.svg";
import imgMostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
// import imgPartlyCloudy from "../img/weather-icons/partlycloudy.svg";
// import imgRain from "../img/weather-icons/rain.svg";
// import imgSnow from "../img/weather-icons/snow.svg";
// import imgStorm from "../img/weather-icons/storm.svg";
// import imgUnknow from "../img/weather-icons/unknown.svg";

const WeatherNow = ({ dataWeather }) => {
  return (
    <div className="content" id="london">
      <img
        class="mainImage"
        id="main-MostlyCloudy"
        src={imgMostlyCloudy}
        alt="web"
      />
      <h3 class="t1">{dataWeather[0].weather[0].main}</h3>
      <p class="t2">
        <strong> Temperature </strong> &nbsp;&nbsp;
        {dataWeather[0].main.temp_min}° to {dataWeather[0].main.temp_max}°C
      </p>
      <p class="t3">
        <strong>Humidty</strong> &nbsp;&nbsp; {dataWeather[0].main.humidity}
        &nbsp;&nbsp;
        <strong>Pressure&nbsp;&nbsp;</strong> {dataWeather[0].main.pressure}
      </p>
    </div>
  );
};
export default WeatherNow;
