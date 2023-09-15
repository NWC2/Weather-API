import React from "react";
import imgClear from "../img/weather-icons/clear.svg";
import imgCloudy from "../img/weather-icons/cloudy.svg";
import imgDrizzle from "../img/weather-icons/drizzle.svg";
import imgFog from "../img/weather-icons/fog.svg";
import imgMostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import imgPartlyCloudy from "../img/weather-icons/partlycloudy.svg";
import imgRain from "../img/weather-icons/rain.svg";
import imgSnow from "../img/weather-icons/snow.svg";
import imgStorm from "../img/weather-icons/storm.svg";
import imgUnknow from "../img/weather-icons/unknown.svg";

const Weather24 = () => {
  return (
    <div className="info" id="info-MostlyCloudy">
      <section class="imageboxes" id="box1">
        <p>03:00</p>
        <img class="infoImages" src={imgMostlyCloudy} />
        <p>8°C</p>
      </section>

      <section class="imageboxes" id="box2">
        <p>06:00</p>
        <img class="infoImages" src={imgMostlyCloudy} />
        <p>9°C</p>
      </section>

      <section class="imageboxes" id="box3">
        <p>09:00</p>
        <img class="infoImages" src={imgClear} />
        <p>14°C</p>
      </section>

      <section class="imageboxes" id="box4">
        <p>12:00</p>
        <img class="infoImages" src={imgClear} />
        <p>17°C</p>
      </section>

      <section class="imageboxes" id="box5">
        <p>15:00</p>
        <img class="infoImages" src={imgClear} />
        <p>18°C</p>
      </section>

      <section class="imageboxes" id="box6">
        <p>18:00</p>
        <img class="infoImages" src={imgClear} />
        <p>16°C</p>
      </section>

      <section class="imageboxes" id="box7">
        <p>21:00</p>
        <img class="infoImages" src={imgMostlyCloudy} />
        <p>13°C</p>
      </section>
    </div>
  );
};

export default Weather24;
