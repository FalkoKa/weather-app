import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';
import iconPicker from './../../utils/iconPicker';

function formateTime(date) {
  let timeString = new Date(date * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
  });

  if (timeString.at(0) == 0) {
    return timeString.substring(1);
  }
  return timeString;
}

const ForecastHour = ({ data }) => {
  return (
    <div className="forecast-hour">
      <h4>{formateTime(data.dt)}</h4>

      <span>{iconPicker(data.weather[0].main, 30)}</span>

      <p>{kelvinToCelsius(data.temp)}</p>
    </div>
  );
};
export default ForecastHour;
