import { useState } from 'react';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const Forecast = ({ data }) => {
  const [forecast, setForecast] = useState('daily');

  function changeHandler(e) {
    setForecast(e.target.value);
  }

  return (
    <div className="forecast">
      <div onChange={changeHandler} className="input-radio">
        <input type="radio" id="daily" name="forecast" value="daily" />
        <label htmlFor="daily">Daily</label>
        <input type="radio" id="hourly" name="forecast" value="hourly" />
        <label htmlFor="hourly">Hourly</label>
      </div>
      {forecast === 'daily' ? (
        <DailyForecast data={data.daily} />
      ) : (
        <HourlyForecast data={data.hourly} />
      )}
    </div>
  );
};
export default Forecast;
