import { useRef, useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useGlobalContext } from "../../hooks/context";

const SpeechContainer = () => {
  const rootElRef = useRef(null);
  const { setCity, city, locations } = useGlobalContext();

  const [isWeather, setIsWeather] = useState(false);
  const [commandValue, setCommandValue] = useState("");
  const [selectCity, setSelectCity] = useState(false);

  useEffect(() => {
    window.alanBtnInstance = alanBtn({
      key: `${process.env.REACT_APP_ALLAN_API}/stage`,
      onCommand: (commandData) => {
        if (commandData.command === "greet") {
        }
        if (commandData.command === "addCity") {
          setCity(commandData.value);
          setSelectCity(true);
          setCommandValue(commandData.value);
        }
        if (commandData.command === "getWeather") {
          setCity(commandData.value);
          setIsWeather(true);
          setCommandValue(commandData.value);
        }
      },
    });
  }, []);

  useEffect(() => {
    if (selectCity) {
      const hasCity = locations.some((location) => {
        return location.city.toLowerCase().includes(city.toLowerCase());
      });
      if (hasCity) {
        window.alanBtnInstance.playText(
          `${commandValue} is already on your list`
        );
      } else {
        window.alanBtnInstance.playText(
          `${commandValue} is being added to your list`
        );
      }
    }
    setSelectCity(false);
    setCommandValue("");
  }, [locations, selectCity]);

  useEffect(() => {
    if (isWeather) {
      const currentWeather = locations.find((location) =>
        location.city.toLowerCase().includes(city.toLowerCase())
      );
      if (currentWeather) {
        const temp = (currentWeather.temp - 273.15).toFixed(2);
        const max = (currentWeather?.max - 273.15).toFixed(2);
        const min = (currentWeather?.min - 273.15).toFixed(2);
        const description = currentWeather?.description;

        window.alanBtnInstance.playText(
          `The current temperature in ${commandValue} is ${temp} degrees Celsius with ${description} and a minimum of ${min} degrees Celsius and a maximum of ${max} degrees Celsius.`
        );
      } else {
        window.alanBtnInstance.playText(
          `Before proceeding, please ensure that you have added a location. I will add ${commandValue} for you.`
        );
      }
    }
    setCommandValue("");
    setIsWeather(false);
  }, [isWeather, locations]);

  return (
    <div className="speech-btn-container">
      <div ref={rootElRef}></div>
    </div>
  );
};
export default SpeechContainer;
