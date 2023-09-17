import React from 'react';
import { useState } from 'react';   

const Head =(props)=>{
    const [search, setSearch]=useState("")
    const handleClick=()=>{
        props.searchForWeather(search)
    }
    return(
        <div className = "header">
        <header>
        <input  onChange={e=>setSearch(e.target.value)}   type="text" placeholder="Type in a city name"/>
        <button onClick={handleClick}   className="btn">FIND WEATHER</button>
        </header>
        </div>
    );
}
export default Head;