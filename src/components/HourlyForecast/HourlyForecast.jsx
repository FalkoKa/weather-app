import ForecastHour from '../ForecastHour/ForecastHour';

const HourlyForecast = ({ data }) => {
  return (
    <div>
      <div className="forecast-wrapper">
        {data.map((hour, idx) => (
          <ForecastHour key={idx} data={hour} />
        ))}
      </div>
    </div>
  );
};
export default HourlyForecast;
