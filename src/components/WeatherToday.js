import React from "react";
import mostlycloudy from './../img/weather-icons/mostlycloudy.svg'
import clear from './../img/weather-icons/clear.svg'

function WeatherToday(){
    return(
        <div>
       <section className="footer">
    <article className="wheatherItem">
      <p>03:00</p>
      <img className="imgItem" src={mostlycloudy}></img>
      <p>8 C</p>
    </article>
    <article className="wheatherItem">
      <p>03:00</p>
      <img className="imgItem" src={mostlycloudy}></img>
      <p>8 C</p>
    </article>
    <article className="wheatherItem">
      <p>03:00</p>
      <img className="imgItem" src={clear}></img>
      <p>8 C</p>
    </article>
    <article className="wheatherItem">
      <p>03:00</p>
      <img className="imgItem" src={clear}></img>
      <p>8 C</p>
    </article>
    <article className="wheatherItem">
      <p>03:00</p>
      <img className="imgItem" src={clear}></img>
      <p>8 C</p>
    </article>
    <article className="wheatherItem">
      <p>03:00</p>
      <img className="imgItem" src={clear}></img>
      <p>8 C</p>
    </article>
    <article className="wheatherItem">
      <p>03:00</p>
      <img className="imgItem" src={mostlycloudy}></img>
      <p>8 C</p>
    </article>
  </section>
  </div>
    )
}
export default WeatherToday