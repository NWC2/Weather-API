import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import Weather24 from "./components/Weather24";
import {} from "./components/WeatherNow";
import "./App.css";
import { findWeatherState } from "./helpers";

const YOUR_API_KEY = "7cdf675119e030962815ed0195219cf3";

const App = () => {
  const [liveWeather, setLiveWeather] = useState();
  const [cityName, setCityName] = useState("london");

  const fetchWeatherData = () => {
    fetch(
      ` http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=${YOUR_API_KEY}`
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok ");
        }

        const data = await response.json();
        setLiveWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div>
      {liveWeather && (
        <div
          className="app"
          data-weather-state={liveWeather.list[0].weather[0].main}
        >
          <Search
            city={cityName}
            onChangeCity={setCityName}
            onSearch={fetchWeatherData}
            weatherState={liveWeather.list[0].weather[0].main}
          />
          <WeatherNow dataWeather={liveWeather.list} />
          <Weather24 dataWeather24={liveWeather.list} />
        </div>
      )}
    </div>
  );
};

export default App;
