import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';
import iconPicker from './../../utils/iconPicker';

const ForecastHour = ({ data }) => {
  return (
    <div className="forecast-hour">
      <h3>hour...</h3>
      {iconPicker(data.weather[0].main, 30)}

      <p>{kelvinToCelsius(data.temp)}</p>
      {console.log(data)}
    </div>
  );
};
export default ForecastHour;
