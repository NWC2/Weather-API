import React from "react";
// Import the JSON data

import "./Search.css";

const Search = ({ dataSearch }) => {
  const city = dataSearch.name;

  return (
    <header>
      <input
        id={city}
        type="text"
        placeholder="Type in your city"
        defaultValue={city}
      ></input>
      <button id="find">FIND WEATHER</button>
    </header>
  );
};

export default Search;
