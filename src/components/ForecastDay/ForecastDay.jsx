import "./ForecastDay.css";

import kelvinToCelsius from "../../utils/converter/kelvinToCelsius";
import iconPicker from "./../../utils/iconPicker";
import setDays from "../../utils/converter/setDays";
import setDate from "../../utils/converter/setDate";

const ForecastDay = ({ data }) => {
  return (
    <div className="forecast-day">
      <h4>{setDays(data.dt)}</h4>
      <h5>{setDate(data.dt)}</h5>
      <span className="weather-icon">
        {iconPicker(data.weather[0].main, 60)}
      </span>
      <p className="day">Day: {kelvinToCelsius(data.temp.day)}</p>
      <p className="night">Night: {kelvinToCelsius(data.temp.night)}</p>
    </div>
  );
};
export default ForecastDay;
