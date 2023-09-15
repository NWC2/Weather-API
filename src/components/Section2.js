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
    const convert=(x)=>{
        return (x-273.15).toFixed(2);
    
    }
    return (
        <div className = "section2">
            <img className="firstimage" src={mostlycloudy}/>
            <div className="overcast">
                overcast clouds
            </div>
            <p className="temp"><b>Temperature&nbsp;</b>&nbsp;{convert(props.data.list[1].main.temp_min)}&deg; 
            to {convert(props.data.list[1].main.temp_max)} &deg;C</p>
            <p className="humidity"><b>Humidity &nbsp; </b>&nbsp;{convert(props.data.list[1].main.humidity)} &nbsp;<b>   
                 Pressure  &nbsp;</b>  {props.data.list[1].main.pressure}</p>
        </div>
    );
}
export default sectiontwo;