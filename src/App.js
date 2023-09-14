import {useState} from 'react'
    import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg"
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


      <section className="weather-forecast">
        <div className="time_1">
          <time className="time" dateTime="9:00">09:00</time>
          <img className="icon" src={clear} alt="Sunny" />
          <p className="temperature">75°c</p>
        </div>

        <div className="time_2">
          <time className="time" dateTime="6:00">06:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_3">
          <time className="time" dateTime="9:00">09:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_4">
          <time className="time" dateTime="12:00">12:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_5">
          <time className="time" dateTime="15:00">15:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

        <div className="time_6">
          <time className="time" dateTime="18:00">18:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>

        </div>

        <div className="time_7">
          <time className="time" dateTime="21:00">21:00</time>
          <img className="icon" src={clear} alt="Cloudy" />
          <p className="temperature">68°c</p>
        </div>

      </section>

    </main>



  </div>
  )
}

export default App;