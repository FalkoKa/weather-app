import ForecastDay from '../ForecastDay/ForecastDay';
import './../Forecast/Forecast.css';

const DailyForecast = ({ data }) => {
  return (
    <div>
      <div className="forecast-wrapper">
        {data.map((day, idx) => (
          <ForecastDay key={idx} data={day} />
        ))}
      </div>
    </div>
  );
};
export default DailyForecast;
