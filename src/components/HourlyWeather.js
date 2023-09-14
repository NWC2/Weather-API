import React from "react";

import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

function HourlyWeather() {
  return (
    <section class="dayweather">
      <article class="timedata">
        <time class="time" datetime="hh:mm">
          3:00
        </time>
        <img
          class="weatherimg"
          src={mostlycloudy}
          alt="weatherimg"
          placeholder="http://placekitten.com/g/200/300"
        />
        <span class="temp">8&deg;C </span>
      </article>
      <article class="timedata">
        <time class="time" datetime="hh:mm">
          6:00
        </time>
        <img
          class="weatherimg"
          src={mostlycloudy}
          alt="weatherimg"
          placeholder="http://placekitten.com/g/200/300"
        />
        <span class="temp">9&deg;C </span>
      </article>
      <article class="timedata">
        <time class="time" datetime="hh:mm">
          9:00
        </time>
        <img
          class="weatherimg"
          src={clear}
          alt="weatherimg"
          placeholder="http://placekitten.com/g/200/300"
        />
        <span class="temp">14&deg;C </span>
      </article>
      <article class="timedata">
        <time class="time" datetime="hh:mm">
          12:00
        </time>
        <img
          class="weatherimg"
          src={clear}
          alt="weatherimg"
          placeholder="http://placekitten.com/g/200/300"
        />
        <span class="temp">17&deg;C </span>
      </article>
      <article class="timedata">
        <time class="time" datetime="hh:mm">
          15:00
        </time>
        <img
          class="weatherimg"
          src={clear}
          alt="weatherimg"
          placeholder="http://placekitten.com/g/200/300"
        />
        <span class="temp">18&deg;C </span>
      </article>
      <article class="timedata">
        <time class="time" datetime="hh:mm">
          18:00
        </time>
        <img
          class="weatherimg"
          src={clear}
          alt="weatherimg"
          placeholder="http://placekitten.com/g/200/300"
        />
        <span class="temp">16&deg;C </span>
      </article>
      <article class="timedata">
        <time class="time" datetime="hh:mm">
          21:00
        </time>
        <img
          class="weatherimg"
          src={mostlycloudy}
          alt="weatherimg"
          placeholder="http://placekitten.com/g/200/300"
        />
        <span class="temp">13&deg;C </span>
      </article>
    </section>
  );
}

export default HourlyWeather;
