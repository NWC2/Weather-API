import React from "react";

function Nav() {
  return (
    <header>
      <input
        type="text"
        name="country"
        id="country"
        placeholder="Enter A City Name"
      />
      <input class="button" type="submit" value="FIND WEATHER"></input>
    </header>
  );
}

export default Nav;
