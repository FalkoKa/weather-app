import './WeatherDetails.css';

const kelvinToCelsius = (kelvin) => {
  return `${(kelvin - 273.15).toFixed(1)} °C`;
};

const milesToKilometer = (miles) => {
  return (miles * 1.609).toFixed(1);
};

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
