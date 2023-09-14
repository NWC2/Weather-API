import React from "react";

import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

function HourlyWeather({ fake }) {
  {
    fake.list.map((e) => {
      console.log(e.dt_txt);
    });
  }

  const getData = fake.list.slice(5, 11);

  return (
    <section className="dayweather">
      {getData.map((e) => {
        let hours = e.dt_txt.split(" ");
        return (
          <article className="timedetail">
            <p className="time">{hours[1].slice(0, 5)}</p>
            <img
              className="wImg"
              src={clear}
              alt="weatherImag"
              placeholder="http://placekitten.com/g/200/300"
            />
            <span className="temp">
              {parseInt(e.main.temp - 273.15)}&deg;C{" "}
            </span>
          </article>
        );
      })}
    </section>
  );
}

export default HourlyWeather;
