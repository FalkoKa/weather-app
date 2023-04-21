import { FaRegWindowClose } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

const HomeTemp = ({ city, temp, index, onDelete }) => {
  let temperature = temp[index] - 273.15;
  const url = city.split(",")[0].replace(" ", "-").toLowerCase();

  return (
    <div className="city-wrapper">
      <FaRegWindowClose size={24} onClick={() => onDelete(index)} />
      <div className="home-city">
        <p>{city}</p>
        <span>{temperature.toFixed(2)} °C</span>
        <Link to={`/${url}`} state={city}>
          <BiSearchAlt2 size={24} />
        </Link>
      </div>
    </div>
  );
};
export default HomeTemp;
