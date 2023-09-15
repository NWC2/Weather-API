import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import partlycloudy from "..//img/weather-icons/partlycloudy.svg";
import rain from "..//img/weather-icons/rain.svg";
import snow from "..//img/weather-icons/snow.svg";
import unknown from "..//img/weather-icons/unknown.svg";
import storm from "..//img/weather-icons/storm.svg";
import cloudy from "..//img/weather-icons/cloudy.svg";
import drizzle from "..//img/weather-icons/drizzle.svg";
import fog from "..//img/weather-icons/fog.svg";

const sectiontwo = (props) => {
    const imageMain= getWeatherIcon(props.data.list[0].weather[0].id);
    const imageTitle=props.data.list[0].weather[0].description;
    const tempFrom=props.data.list[0].main.temp_min;
    const tempTo=props.data.list[0].main.temp_max;
const humidity=props.data.list[0].main.humidity;
const pressure=props.data.list[0].main.pressure;

//getting backgroung color to pass it to the Main div style
const backColor=props.color;
    return (
        <main style={{ backgroundColor: backColor }}>
        <div className = "section2">
            <img className="firstimage" src={imageMain}/>
            <div className="overcast">
                {imageTitle}
            </div>
            <p className="temp"><b>Temperature&nbsp;</b>&nbsp;{tempFrom}&deg; 
            to {tempTo} &deg;C</p>
            <p className="humidity"><b>Humidity &nbsp; </b>&nbsp;{humidity}% &nbsp;<b>   
                 Pressure  &nbsp;</b>  {pressure}</p>
        </div>
        </main>
    );
}
function getWeatherIcon(id) {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id < 500) {
      return drizzle;
    } else if (id >= 500 && id < 600) {
      return rain;
    } else if (id >= 600 && id < 700) {
      return snow;
    } else if (id >= 700 && id < 800) {
      return fog;
    } else if (id === 800) {
      return clear;
    } else if (id === 801) {
      return partlycloudy;
    } else if (id > 801 && id <= 805) {
      return mostlycloudy;
    } else {
      return mostlycloudy;
    }
  }
export default sectiontwo;