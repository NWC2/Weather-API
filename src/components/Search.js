import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";

const Search = () => {

    return (
      <header>
            <input id="search" type="text" placeholder="london"></input>
            <button id="find">FIND WEATHER</button>
      </header>
    );
}
export default Search;
