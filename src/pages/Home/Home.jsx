import Map from "../../components/Map/Map";
import LocationSidebar from "../../components/LocationSidebar/LocationSideBar";

import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Map />
      <LocationSidebar />
    </div>
  );
};
export default Home;
