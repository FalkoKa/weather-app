import Forecast from '../../components/Forecast/Forecast';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dataSydney from '../../dataSydney.json';
import './Weather.css';
import Map from '../../components/Map/Map';
import { useGlobalContext } from '../../hooks/context';

const Weather = (props) => {
  const [data, setData] = useState(null);
  const [latLng, setLatLng] = useState(null);

  const { city } = useGlobalContext();

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
    if (city !== '') {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.REACT_APP_GOOGLE_API}`
        )
        .then((res) => {
          setLatLng([
            res.data.results[0].geometry.location.lat,
            res.data.results[0].geometry.location.lng,
          ]);
        });
    }
  }, [city]);

  useEffect(() => {
    if (latLng !== null) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latLng[0]}&lon=${latLng[1]}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`
        )
        .then((res) => {
          setData(res.data);
        });
    }
  }, [latLng]);

  useEffect(() => {
    setData(dataSydney);
  }, []);

  return (
    <div className="weather">
      {data && <WeatherInfo data={data} />}
      <Map />
      {data && <WeatherDetails data={data} />}
      {data && <Forecast data={data} />}
    </div>
  );
};
export default Weather;
