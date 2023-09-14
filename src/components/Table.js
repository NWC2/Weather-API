import React from 'react';
import mostlyCloudy from '../img/weather-icons/mostlycloudy.svg';
import clear from '../img/weather-icons/clear.svg';

function table1(){
    return(
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
            <td><img src={mostlyCloudy}/></td>
            <td><img src={mostlyCloudy}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={clear}/></td>
            <td><img src={mostlyCloudy}/></td>
        </tr>
        <tr>
            <td>8&deg;C</td>
            <td>9&deg;C</td>
            <td>14&deg;C</td>
            <td>17&deg;C</td>
            <td>18&deg;C</td>
            <td>16&deg;C</td>
            <td>13&deg;C</td>
        </tr>
      </table>
      </div>
    );
}

export default table1;
     