import React from 'react';
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

const table1 = (props) => {
    return (
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
            <td><img src={mostlycloudy}/></td>
            <td><img src={mostlycloudy}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={mostlycloudy}/></td>
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
    );
}

export default table1;
     