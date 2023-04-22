import { useRef, useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useGlobalContext } from "../../hooks/context";

const SpeechContainer = () => {
  const rootElRef = useRef(null);
  const { setCity, weather } = useGlobalContext();

  const [isWeather, setIsWeather] = useState(false);
  const [commandValue, setCommandValue] = useState("");

  useEffect(() => {
    window.alanBtnInstance = alanBtn({
      key: `${process.env.REACT_APP_ALLAN_API}/stage`,
      onCommand: (commandData) => {
        if (commandData.command === "greet") {
        }
        if (commandData.command === "addCity") {
          setCity(commandData.value);
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
    if (isWeather) {
      if (weather) {
        const temp = (weather?.main?.temp - 273.15).toFixed(2);
        const max = (weather?.main?.temp_max - 273.15).toFixed(2);
        const min = (weather?.main?.temp_min - 273.15).toFixed(2);
        const description = weather?.weather[0]?.description;

        window.alanBtnInstance.playText(
          `The current temperature in ${commandValue} is ${temp} degrees Celsius with ${description} and a minimum of ${min} degrees Celsius and a maximum of ${max} degrees Celsius. ${commandValue} has been added to your list.`
        );
      }
    }
    setIsWeather(false);
  }, [weather, isWeather]);

  return (
    <div className="speech-btn-container">
      <div ref={rootElRef}></div>
    </div>
  );
};
export default SpeechContainer;
