import {useState}from "react";

// import clear from "../img/weather-icons/clear.svg";
import "./Search.css";

function Search(){
const [search,setSearch]=useState('');
const fetchData=()=>{
  console.log("hello")
}
    return (
      <header className="app__header">
      <nav>
        <form className="formSearching">
          <input value={search}
            className="citySearch"
            placeholder="Type in a city Name"
            onChange={e => setSearch(e.target.value)} />
          <input value="FIND WEATHER" type="button" className="buttonSearch"  onClick={fetchData} />
        </form>
      </nav>
    </header>

    );
  }

export default Search;