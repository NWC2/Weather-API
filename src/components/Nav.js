import React from "react";
 
function Nav() {
    return (
        <header>
        <label for="search" ></label>
        <input type="text" id="name" name="name" placeholder="Enter the city" />
        <button className="btn">FIND WEATHER</button>
        </header>
    )
}



export default Nav 