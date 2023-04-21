import "./LocationSidebar.css";
import { FaSearchLocation } from "react-icons/fa";
import Search from "../Search/Search";
import { useGlobalContext } from "../../hooks/context";
import useFetch from "../../hooks/useFetch";
import HomeTemp from "../HomeTemp/HomeTemp";

const LocationSidebar = () => {
  const { locations, setLocations } = useGlobalContext();

  const { temp } = useFetch();

  const handleDelete = (idx) => {
    setLocations(
      locations.filter((l, index) => {
        return index !== idx;
      })
    );
  };

  return (
    <div className="location-sidebar">
      <div className="search-icon">
        <FaSearchLocation size={36} />
      </div>
      <Search />
      <div className="home-cities">
        {locations.map((city, index) => (
          <HomeTemp
            city={city}
            key={index}
            temp={temp}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default LocationSidebar;
