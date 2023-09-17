import React from "react";

const Search = ({ city, onChangeCity, onSearch, weatherState }) => {
  return (
    <header data-weather-state={weatherState}>
      <input
        id={city}
        type="text"
        placeholder="Type in your city"
        value={city}
        onChange={(e) => onChangeCity(e.target.value)}
      ></input>
      <button id="find" onClick={onSearch} data-weather-state={weatherState}>
        FIND WEATHER
      </button>
    </header>
  );
};

export default Search;
