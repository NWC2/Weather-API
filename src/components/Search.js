import React from "react";

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
