import partlycloudy from '../img/weather-icons/partlycloudy.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import snow from '../img/weather-icons/snow.svg';
import clear from '../img/weather-icons/clear.svg';

const ForcastHour = () => {
    return(
        <>
        <div>
            <p className="time">03:00</p>
            <img src={partlycloudy} alt="Partly Cloudy" />
            <p className="temp">8&deg;C</p>
        </div>
        </>
    )
}
export default ForcastHour ;