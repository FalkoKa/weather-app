import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [city, setCity] = useState("");
  const [alert, setAlert] = useState(false);
  const [weather, setWeather] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        locations,
        setLocations,
        setCity,
        city,
        alert,
        setAlert,
        weather,
        setWeather,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
