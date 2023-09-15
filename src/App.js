import React, { useState } from "react";
import "./App.css";
import Head from './components/Header';
import Section2 from './components/Section2';
import Table from './components/Table';
import FakeWeather from './fakeWeatherData.json';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchForWeather = (searchInput) => {
    setLoading(true);
    setError(null);

    const apiKey = 'a623d23ca26596f50a965ac4c3025dff';

    // Fetch data from the API when the button is clicked
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&cnt=8&units=metric&appid=${apiKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Please Enter a valid city name");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setBackgroundColor(getBackgroundColor(data.list[0].weather[0].id));

    setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  function getBackgroundColor(id) {
    if (id < 300) {
      return 'aqua'; 
    } else if (id >= 300 && id < 500) {
      return 'lightblue'; 
    } else if (id >= 500 && id < 600) {
      return 'blue'; 
    } else if (id >= 600 && id < 700) {
      return 'white'; 
    } else if (id >= 700 && id < 800) {
      return 'grey'; 
    } else if (id === 800) {
      return 'yellow'; 
    } else if (id === 801) {
      return 'black'; 
    } else if (id > 801 && id <= 805) {
      return 'red'; 
    } else {
      return 'lightblue'; 
    }
  }

  return (
    <div className="app">
    <div  style={{ backgroundColor: backgroundColor }}></div>
      <main>
        <Head searchForWeather={searchForWeather} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {data && <Section2 data={data} color ={backgroundColor}/>}
            {data && <Table data={data} color={backgroundColor} />}
          </>
        )}
      </main>
    </div>
  );
}
export default App;