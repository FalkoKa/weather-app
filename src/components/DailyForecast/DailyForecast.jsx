import ForecastDay from '../ForecastDay/ForecastDay';
import './../Forecast/Forecast.css';

const DailyForecast = ({ data }) => {
  return (
    <div>
      <h1>Daily Forecast</h1>
      <div className="forecast-wrapper">
        {data.map((day, idx) => (
          <ForecastDay key={idx} data={day} />
        ))}
      </div>
    </div>
  );
};
export default DailyForecast;
