import partlycloudy from '../img/weather-icons/partlycloudy.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import snow from '../img/weather-icons/snow.svg';
import clear from '../img/weather-icons/clear.svg';

const WeatherInfo = () => {
    return(
        <section class="w-details">
            <div className="content">
              <div className="w-image">
                <img src={partlycloudy} alt="Partly Cloudy" />
                <p className="desc">overcast clouds</p>
              </div>
              <p className="temp">Temperature <span>10&deg;C to 11&deg;C</span></p>
              <p className="details"><span>Humidity</span> 78% <span>Pressure</span> 1008.48</p>
            </div>
          </section>
    )
}
export default WeatherInfo ;