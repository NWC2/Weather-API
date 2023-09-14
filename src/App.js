import {useState} from 'react'
    import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
// import clear from "./img/weather-icons/clear.svg"
import Forecast from './components/Forecast';
function App() {

  
//use useState() to target any change in the input text
  const [search, setSearch] = useState('');
  return ( 
  <div className="app">
    <header className="app__header">
      <nav>
        <form className="formSearching">
          <input value={search}
            className="citySearch"
            placeholder="Type in a city Name"
            onChange={e => setSearch(e.target.value)} />
          <input value="FIND WEATHER" type="button" className="buttonSearch" />
        </form>
      </nav>
    </header>

    <main>

      <section className="currentWeather">
        <img src={mostlycloudy} alt="weather status" width={150} height={150} />
        <section className="weatherDescription">
          <p className="weatherStatus">OverCast clouds</p>
          <p><span className="temperatureProperty">temperature</span> 10° to 11°C</p>
          <p><span className="humidityProperty">Humidity </span>78%<span className="pressureProperty"> Pressure </span>1008.4</p>
        </section>
        </section>
        <Forecast/>


    </main>



  </div>
  )
}

export default App;