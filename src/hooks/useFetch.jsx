import { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import axios from "axios";

const useFetch = () => {
  const { locations, setLocations } = useGlobalContext();
  const [id, setId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { city, setAlert } = useGlobalContext();

  useEffect(() => {
    let timeoutId;
    async function fetchTemperature() {
      if (locations.length <= 4) {
        if (city) {
          setIsLoading(true);
          try {
            const { data: position } = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.REACT_APP_GOOGLE_API}`
            );
            const { lat, lng } = position.results[0].geometry.location;

            const { data: weather } = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`
            );
            const hasCity = locations.find(
              (location) => location.city === city
            );
            if (!hasCity) {
              setLocations((prevLocations) => [
                ...prevLocations,
                {
                  id: id + 1,
                  city,
                  temp: weather?.main?.temp,
                },
              ]);
              setId((prevId) => prevId + 1);
            }
            timeoutId = setTimeout(fetchTemperature, 3600000);
          } catch (err) {
            setHasError(true);
            console.warn(err);
          }
          setIsLoading(false);
        }
      } else {
        setAlert(true);
      }
    }
    fetchTemperature();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [city]);

  useEffect(() => {
    if (locations.length > 0) {
      localStorage.setItem("locations", JSON.stringify(locations));
    }
  }, [locations]);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem("locations"));
    if (storedLocations) {
      setLocations(storedLocations);
      //setId(storedLocations.length);
    }
  }, []);

  return { isLoading, hasError };
};

export default useFetch;
