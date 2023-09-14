import "./App.css";
import Search from './components/Search.js'
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg"
import CurrentWeather from './components/CurrentWeather';
function App() {


  //use useState() to target any change in the input text
  return (
    <div className="app">
      <Search />
      <main>
<CurrentWeather/>
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