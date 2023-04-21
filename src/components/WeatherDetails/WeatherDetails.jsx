import './WeatherDetails.css';
import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';
import milesToKilometer from '../../utils/converter/milesToKilometer';
import { CiTempHigh } from 'react-icons/ci';
import { WiHumidity } from 'react-icons/wi';
import { FaCloudShowersHeavy } from 'react-icons/fa';
import { MdOutlineWindPower } from 'react-icons/md';

const WeatherDetails = ({ data }) => {
  return (
    <div className="weather-details">
      <div className="feels-like">
        <p>{<CiTempHigh size={20} />} Feels Like</p>
        <span>{kelvinToCelsius(data.current.feels_like)}</span>
      </div>

      <div className="humidity">
        <p>{<WiHumidity size={25} />} Humidity</p>
        <span>{data.current.humidity} %</span>
      </div>

      <div className="chance-of-rain">
        <p>{<FaCloudShowersHeavy size={20} />} Chance of Rain</p>
        <span>{data.current.rain['1h'] * 100} %</span>
      </div>

      <div className="wind-speed">
        <p>{<MdOutlineWindPower size={20} />} Wind Speed</p>
        <span>{milesToKilometer(data.current.wind_speed)} km/h</span>
      </div>
    </div>
  );
};
export default WeatherDetails;
