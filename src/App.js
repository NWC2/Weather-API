import "./App.css";
import Search from './components/Search.js'
import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';
function App() {


  //use useState() to target any change in the input text
  return (
    <div className="app">
      <Search />
      <main>
      <CurrentWeather/>
        <Forecast/>
    </main>
</div>

  )
}

export default App;