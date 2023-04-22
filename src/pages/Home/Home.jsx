import Map from "../../components/Map/Map";
import LocationSidebar from "../../components/LocationSidebar/LocationSideBar";
import SpeechContainer from "../../components/SpeechContainer/SpeechContainer";

import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Map />
      <LocationSidebar />
      <SpeechContainer />
    </div>
  );
};
export default Home;
