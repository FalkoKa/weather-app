import './WeatherInfo.css';

const WeatherInfo = ({ data }) => {
  const kelvinToCelsius = (kelvin) => {
    return `${(kelvin - 273.15).toFixed(1)} °C`;
  };

  return (
    <div className="weather-info">
      <h1>{data.current.weather[0].description}</h1>
      <h1>{data.current.weather[0].main}</h1>
      <p>{data.timezone}</p>
      <p>day, date, time</p>
      <h1 className="temperature">{kelvinToCelsius(data.current.temp)}</h1>
    </div>
  );
};
export default WeatherInfo;
