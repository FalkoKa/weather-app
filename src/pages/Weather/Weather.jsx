import Forecast from '../../components/Forecast/Forecast';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import dataSydney from "../../dataSydney.json";
import './Weather.css';
import Map from '../../components/Map/Map';
import { useGlobalContext } from '../../hooks/context';
import { useLocation } from 'react-router-dom';
import BabyMode from '../../components/BabyMode/BabyMode';

const Weather = (props) => {
  const { state } = useLocation();
  const { city } = useGlobalContext();

  const [data, setData] = useState(null);
  const [latLng, setLatLng] = useState(null);

  console.log(city);
  console.log(state);

  useEffect(() => {
    if (city === state) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${state}&key=${process.env.REACT_APP_GOOGLE_API}`
        )
        .then((res) => {
          setLatLng([
            res.data.results[0].geometry.location.lat,
            res.data.results[0].geometry.location.lng,
          ]);
        });
    } else {
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

  // useEffect(() => {
  //   setData(dataSydney);
  // }, []);

  return (
    <div className="weather">
      {data && <WeatherInfo data={data} />}
      {/* <Map /> */}
      <div>map</div>
      {data && <WeatherDetails data={data} />}
      {data && <Forecast data={data} />}
      {data && <BabyMode data={data.hourly.slice(0, 24)} />}
    </div>
  );
};
export default Weather;
