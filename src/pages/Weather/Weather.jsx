import Forecast from '../../components/Forecast/Forecast';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dataSydney from '../../dataSydney.json';
import './Weather.css';

const Weather = (props) => {
  const [data, setData] = useState(null);

  // const [latitude, longitude] = [-33.865143, 151.2099];

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     });
  // }, []);

  useEffect(() => {
    setData(dataSydney);
  }, []);

  return (
    <div className="weather">
      {data && <WeatherInfo data={data} />}
      {data && <WeatherDetails data={data} />}
      {data && <Forecast data={data} />}
    </div>
  );
};
export default Weather;
