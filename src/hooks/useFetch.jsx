import { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import axios from "axios";

const useFetch = () => {
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState([]);
  const { city } = useGlobalContext();

  useEffect(() => {
    async function fetchTemperature() {
      if (city) {
        try {
          const { data: position } = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.REACT_APP_GOOGLE_API}`
          );
          const { lat, lng } = position.results[0].geometry.location;

          const { data: weather } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`
          );
          setWeather(weather);
          setTemp([weather?.main?.temp, ...temp]);
        } catch (err) {
          console.warn(err);
        }
      }
    }
    fetchTemperature();
  }, [city]);

  return { weather, temp };
};

export default useFetch;
