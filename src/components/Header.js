import React from 'react';
function head(){
    return(
        <div className = "header">
        <header>
        <input type="text" placeholder="Type in a city name"/>
        <button className="btn" onClick="">FIND WEATHER</button>
      </header>
        </div>
    );
}
export default head;