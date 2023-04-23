import { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import axios from "axios";

const useFetch = () => {
  const { locations, setLocations } = useGlobalContext();
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
            const cityName = city.split(",")[0].split(" ")[0].toLowerCase();

            const hasCity = locations.find((location) => {
              return (
                location.city.split(",")[0].split(" ")[0].toLowerCase() ===
                cityName
              );
            });

            if (!hasCity) {
              setLocations((prevLocations) => [
                ...prevLocations,
                {
                  id: locations.length + 1,
                  city,
                  temp: weather?.main?.temp,
                  max: weather?.main?.temp_max,
                  min: weather?.main?.temp_min,
                  description: weather?.weather[0]?.description,
                },
              ]);
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
    }
  }, []);

  return { isLoading, hasError };
};

export default useFetch;
