import Forecast from "../../components/Forecast/Forecast";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import Map from "../../components/Map/Map";
import { useGlobalContext } from "../../hooks/context";
import BabyMode from "../../components/BabyMode/BabyMode";
import Loading from "../../components/Loading/Loading";
import Search from "../../components/Search/Search";

import { useLocation } from "react-router-dom";

const Weather = (props) => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { state } = useLocation();
  const { cityWeather, setCityWeather } = useGlobalContext();

  useEffect(() => {
    if (state) {
      setCityWeather((prevCity) => (prevCity === state ? "" : state));
    } else {
      window.location.replace("/");
    }
  }, [state]);

  useEffect(() => {
    let city;
    if (!cityWeather) {
      city = state;
    } else {
      city = cityWeather;
    }

    console.log(city);

    async function fetchData() {
      if (city) {
        setIsLoading(true);
        try {
          const { data: position } = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.REACT_APP_GOOGLE_API}`
          );
          const { lat, lng } = position.results[0].geometry.location;

          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`
          );

          setData(data);
        } catch (err) {
          setHasError(true);
          console.warn(err);
        }
        setIsLoading(false);
      }
    }
    fetchData();
  }, [cityWeather, state]);

  if (hasError) {
    return <h1>Error fetching data</h1>;
  }

  console.log("city:" + cityWeather);
  console.log("state: " + state);

  return (
    <div className="weather">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="weather-top">
            {data && <WeatherInfo data={data} />}
            <Search />
            {data && <WeatherDetails data={data} />}
          </div>
          <div className="weather-down">
            {data && <Forecast data={data} />}
            {/* {data && <BabyMode data={data.hourly.slice(0, 24)} />} */}
          </div>
        </>
      )}
    </div>
  );
};
export default Weather;
