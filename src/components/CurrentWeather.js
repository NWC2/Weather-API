import React from 'react-dom'
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
function CurrentWeather(){
    return(
        <section className="currentWeather">
    <img src={mostlycloudy} alt="weather status" width={150} height={150} />
    <section className="weatherDescription">
      <p className="weatherStatus">OverCast clouds</p>
      <p><span className="temperatureProperty">temperature</span> 10° to 11°C</p>
      <p><span className="humidityProperty">Humidity </span>78%<span className="pressureProperty"> Pressure </span>1008.4</p>
    </section>

  </section>
    )
}

export default CurrentWeather;