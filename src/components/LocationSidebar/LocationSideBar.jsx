import "./LocationSidebar.css";
import { FaSearchLocation, FaRegWindowClose } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Search from "../Search/Search";
import { useGlobalContext } from "../../hooks/context";
import { useEffect } from "react";

const LocationSidebar = () => {
  const { locations, city } = useGlobalContext();

  //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

  console.log(city);
  console.log(locations);

  return (
    <div className="location-sidebar">
      <div className="search-icon">
        <FaSearchLocation size={36} />
      </div>
      <Search />

      <div className="home-cities">
        {locations.map((city, index) => (
          <div className="city-wrapper" key={index}>
            <FaRegWindowClose size={24} />
            <div className="home-city">
              <p>{city}</p>
              <span>20 °C</span>
              <BiSearchAlt2 size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LocationSidebar;
