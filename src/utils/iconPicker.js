import {
  BsCloudSunFill,
  BsCloudSlash,
  BsFillCloudSnowFill,
} from 'react-icons/bs';
import { FaCloudShowersHeavy } from 'react-icons/fa';
import { TiWeatherStormy } from 'react-icons/ti';

export default function iconPicker(weather, size) {
  if (weather === 'Clouds') {
    return <BsCloudSunFill size={size} />;
  } else if (weather === 'Clear') {
    return <BsCloudSlash size={size} />;
  } else if (
    weather === 'Rain' ||
    weather === 'Drizzle' ||
    weather === 'Mist'
  ) {
    return <FaCloudShowersHeavy size={size} />;
  } else if (weather === 'Thunderstorm') {
    return <TiWeatherStormy size={size} />;
  } else if (weather === 'Snow') {
    <BsFillCloudSnowFill size={size} />;
  }
}
