import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';
import iconPicker from './../../utils/iconPicker';

const ForecastDay = ({ data }) => {
  return (
    <div className="forecast-day">
      <h3>day...</h3>
      {iconPicker(data.weather[0].main, 30)}
      <p>day: {kelvinToCelsius(data.temp.day)}</p>
      <p>night: {kelvinToCelsius(data.temp.night)}</p>
      <p>min: {kelvinToCelsius(data.temp.min)}</p>
      {console.log(data)}
    </div>
  );
};
export default ForecastDay;
