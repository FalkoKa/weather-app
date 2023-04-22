import "./LocationSidebar.css";
import { FaSearchLocation } from "react-icons/fa";
import Search from "../Search/Search";
import { useGlobalContext } from "../../hooks/context";
import useFetch from "../../hooks/useFetch";
import HomeTemp from "../HomeTemp/HomeTemp";
import Loading from "../Loading/Loading";
import Warn from "../Alert/Warn";

const LocationSidebar = () => {
  const { locations, setLocations, alert, setAlert } = useGlobalContext();

  const { isLoading, hasError } = useFetch();

  if (hasError) {
    return <h1>Error fetching data</h1>;
  }

  const handleDelete = (id) => {
    setLocations(
      locations.filter((location) => {
        return location.id !== id;
      })
    );
    if (locations.length === 1) {
      localStorage.clear();
    } else {
      localStorage.setItem("locations", JSON.stringify(locations));
    }

    setAlert(false);
  };

  return (
    <div className="location-sidebar">
      <div className="search-icon">
        <FaSearchLocation size={36} />
      </div>
      <Search />
      {alert && <Warn />}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="home-cities">
          {locations?.map((location) => (
            <HomeTemp
              city={location.city}
              id={location.id}
              temp={location.temp}
              key={location.id}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default LocationSidebar;
