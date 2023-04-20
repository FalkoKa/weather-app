import './WeatherDetails.css';
import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';
import milesToKilometer from '../../utils/converter/milesToKilometer';

const WeatherDetails = ({ data }) => {
  return (
    <div className="weather-details">
      <div className="feels-like">
        <p>Feels Like</p>
        <span>{kelvinToCelsius(data.current.feels_like)}</span>
      </div>

      <div className="humidity">
        <p>Humidity</p>
        <span>{data.current.humidity} %</span>
      </div>

      <div className="chance-of-rain">
        <p>Chance of Rain</p>
        <span>{data.current.rain['1h'] * 100} %</span>
      </div>

      <div className="wind-speed">
        <p>Wind Speed</p>
        <span>{milesToKilometer(data.current.wind_speed)} km/h</span>
      </div>
    </div>
  );
};
export default WeatherDetails;
