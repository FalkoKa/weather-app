import "./LocationSidebar.css";
import { FaSearchLocation, FaRegWindowClose } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";

const LocationSidebar = () => {
  return (
    <div className="location-sidebar">
      <div className="search-icon">
        <FaSearchLocation size={36} />
      </div>
      <div className="search-city">
        <p>Add location</p>
      </div>
      <div className="home-cities">
        <div className="city-wrapper">
          <FaRegWindowClose size={24} />
          <div className="home-city">
            <p>Melbourne</p>
            <span>20 °C</span>
            <BiSearchAlt2 size={24} />
          </div>
        </div>
        <div className="city-wrapper">
          <FaRegWindowClose size={24} />
          <div className="home-city">
            <p>Sydney</p>
            <span>20 °C</span>
            <BiSearchAlt2 size={24} />
          </div>
        </div>
        <div className="city-wrapper">
          <FaRegWindowClose size={24} />
          <div className="home-city">
            <p>Adelaide</p>
            <span>20 °C</span>
            <BiSearchAlt2 size={24} />
          </div>
        </div>
        <div className="city-wrapper">
          <FaRegWindowClose size={24} />
          <div className="home-city">
            <p>Canberra</p>
            <span>20 °C</span>
            <BiSearchAlt2 size={24} />
          </div>
        </div>
        <div className="city-wrapper">
          <FaRegWindowClose size={24} />
          <div className="home-city">
            <p>Brisbane</p>
            <span>20 °C</span>
            <BiSearchAlt2 size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationSidebar;
