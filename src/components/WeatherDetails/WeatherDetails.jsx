import "./WeatherDetails.css";
import kelvinToCelsius from "../../utils/converter/kelvinToCelsius";
import milesToKilometer from "../../utils/converter/milesToKilometer";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineWindPower } from "react-icons/md";

const WeatherDetails = ({ data }) => {
  return (
    <div className="weather-details">
      <div className="feels-like">
        <CiTempHigh size={40} />
        <div>
          <p>Feels Like</p>
          <span>{kelvinToCelsius(data.current.feels_like)}</span>
        </div>
      </div>

      <div className="humidity">
        <WiHumidity size={40} />
        <div>
          <p>Humidity</p>
          <span>{data.current.humidity} %</span>
        </div>
      </div>

      <div className="wind-speed">
        <MdOutlineWindPower size={40} />
        <div>
          <p>Wind Speed</p>
          <span>{milesToKilometer(data.current.wind_speed)} km/h</span>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;
