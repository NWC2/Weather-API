import React from 'react';
import mostlyCloudy from '../img/weather-icons/mostlycloudy.svg';

function sectiontwo(){
    return(
        <div className = "section2">
            <img className="firstimage" src={mostlyCloudy}/>
            <div className="overcast">
                overcast clouds
            </div>
            <p className="temp"><b>Temperature&nbsp;</b>&nbsp;10&deg; to 11&deg;C</p>
            <p className="humidity"><b>Humidity &nbsp; </b>&nbsp;78% &nbsp;<b>    Pressure  &nbsp;</b>  100848</p>
        </div>
    );
}
export default sectiontwo;