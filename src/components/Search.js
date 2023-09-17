import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        
        {this.state.input}
        <input
          type="text"
          id="input-name"
          onChange={event => {
            this.setState({ input: event.target.value });

            // value={cityName}
            // onChange={handleInputChange}
          }}
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
