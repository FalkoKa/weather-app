import "./WeatherInfo.css";
import iconPicker from "./../../utils/iconPicker";
import TimeAndDate from "../TimeAndDate/TimeAndDate";
import Search from "../../components/Search/Search";
import kelvinToCelsius from "../../utils/converter/kelvinToCelsius";

const WeatherInfo = ({ data }) => {
  return (
    <div className="weather-info">
      <div className="weather-info__header">
        <h1>{data.current.weather[0].description}</h1>
        {iconPicker(data.current.weather[0].main, 80)}
      </div>
      <div className="weather-info__body">
        <span>{data.timezone}</span>
        <TimeAndDate />
      </div>
      <div className="weather-info__footer">
        <h2 className="temperature">{kelvinToCelsius(data.current.temp)}</h2>
      </div>
    </div>
  );
};
export default WeatherInfo;
