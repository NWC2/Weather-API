import React from "react";
// Import the JSON data

import "./Search.css";

const Search = ({ city, onChangeCity, onSearch }) => {
  return (
    <header>
      <input
        id={city}
        type="text"
        placeholder="Type in your city"
        value={city}
        onChange={(e) => onChangeCity(e.target.value)}
      ></input>
      <button id="find" onClick={onSearch}>
        FIND WEATHER
      </button>
    </header>
  );
};

export default Search;
