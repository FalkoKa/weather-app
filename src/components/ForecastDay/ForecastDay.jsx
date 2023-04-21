import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';
import iconPicker from './../../utils/iconPicker';
import setDays from '../../utils/converter/setDays';

const ForecastDay = ({ data }) => {
  return (
    <div className="forecast-day">
      <h4>{setDays(data.dt)}</h4>
      <span className="weather-icon">
        {iconPicker(data.weather[0].main, 30)}
      </span>
      <p className="day">{kelvinToCelsius(data.temp.day)}</p>
      <p className="night">{kelvinToCelsius(data.temp.night)}</p>
    </div>
  );
};
export default ForecastDay;
