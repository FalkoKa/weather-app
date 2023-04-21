import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';

const ForecastDay = ({ data }) => {
  return (
    <div className="forecast-day">
      <h3>day...</h3>
      <p>day: {kelvinToCelsius(data.temp.day)}</p>
      <p>night: {kelvinToCelsius(data.temp.night)}</p>
      <p>min: {kelvinToCelsius(data.temp.min)}</p>
      {console.log(data)}
    </div>
  );
};
export default ForecastDay;
