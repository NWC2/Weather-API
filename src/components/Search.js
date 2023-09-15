import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
import "../App.css"
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
     
     <header>
            <input id="search" type="text" placeholder="londong"></input>
            <button id="find">FIND WEATHER</button>
          </header>
      </div>
    );
  }
}
export default Search;
