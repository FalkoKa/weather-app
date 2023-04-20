const kelvinToCelsius = (kelvin) => {
  return `${(kelvin - 273.15).toFixed(1)} °C`;
};

const ForecastHour = ({ data }) => {
  return (
    <div className="forecast-hour">
      <h3>hour...</h3>
      <p>{kelvinToCelsius(data.temp)}</p>
      {console.log(data)}
    </div>
  );
};
export default ForecastHour;
