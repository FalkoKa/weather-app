import './WeatherInfo.css';
import iconPicker from './../../utils/iconPicker';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import Search from '../../components/Search/Search';
import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';

const WeatherInfo = ({ data }) => {
  return (
    <div className="weather-info">
      <h1>{data.current.weather[0].description}</h1>
      {iconPicker(data.current.weather[0].main, 60)}

      <p>{data.timezone}</p>
      <TimeAndDate />
      <h1 className="temperature">{kelvinToCelsius(data.current.temp)}</h1>
      <Search />
    </div>
  );
};
export default WeatherInfo;
