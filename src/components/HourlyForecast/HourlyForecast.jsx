import ForecastHour from '../ForecastHour/ForecastHour';

const HourlyForecast = ({ data }) => {
  return (
    <div>
      <h1>Hourly Forecast</h1>
      <div className="forecast-wrapper">
        {data.map((hour, idx) => (
          <ForecastHour key={idx} data={hour} />
        ))}
      </div>
    </div>
  );
};
export default HourlyForecast;
