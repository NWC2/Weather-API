import React from 'react';
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import partlycloudy from "..//img/weather-icons/partlycloudy.svg";
import rain from "..//img/weather-icons/rain.svg";
import snow from "..//img/weather-icons/snow.svg";
import storm from "..//img/weather-icons/storm.svg";
import cloudy from "..//img/weather-icons/cloudy.svg";
import drizzle from "..//img/weather-icons/drizzle.svg";
import fog from "..//img/weather-icons/fog.svg";


const getWeatherIcon =(id)=>{
  if (id < 300) {
    return storm;}
  else if (id >= 300 && id < 500) {
    return drizzle;}
  else if (id >= 500 && id < 600) {
      return rain;}
   else if (id >= 600 && id < 700){
    return snow;}
  else if (id >= 700 && id < 800)  
    return fog;
  else if (id === 800) {
    return clear;}
  else if (id===801){
    return partlycloudy;}
  else if (id > 801 && id < 805){
    return mostlycloudy;}
  else {
    return cloudy; 
  }}

const table1 = (props) => {
    const convert=(x)=>{
        return (x-273.15).toFixed(2);
    }
  
    const backColor=props.color;
    return (
      <footer style={{ backgroundColor: backColor }}>
        <div className="table">
        <table>
        <tr>
            <td>03:00</td>
            <td>06:00</td>
            <td>09:00</td>
            <td>12:00</td>
            <td>15:00</td>
            <td>18:00</td>
            <td>21:00</td>
        </tr>
        <tr className="secondrow">
            <td><img src={getWeatherIcon(props.data.list[1].weather[0].id)}/></td>
            <td><img src={getWeatherIcon(props.data.list[2].weather[0].id)}/></td>
            <td><img src={getWeatherIcon(props.data.list[3].weather[0].id)}/></td>
            <td><img src={getWeatherIcon(props.data.list[4].weather[0].id)}/></td>
            <td><img src={getWeatherIcon(props.data.list[5].weather[0].id)}/></td>
            <td><img src={getWeatherIcon(props.data.list[6].weather[0].id)}/></td>
            <td><img src={getWeatherIcon(props.data.list[7].weather[0].id)}/></td>
        </tr>
        <tr>
            <td>{props.data.list[1].main.temp}&deg;C</td>
            <td>{props.data.list[2].main.temp}&deg;C</td>
            <td>{props.data.list[3].main.temp}&deg;C</td>
            <td>{props.data.list[4].main.temp}&deg;C</td>
            <td>{props.data.list[5].main.temp}&deg;C</td>
            <td>{props.data.list[6].main.temp}&deg;C</td>
            <td>{props.data.list[7].main.temp}&deg;C</td>
        </tr>
      </table>
      </div>
      </footer>
    );
}


export default table1;
     