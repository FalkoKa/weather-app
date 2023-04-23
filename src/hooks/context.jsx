import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [city, setCity] = useState("");
  const [alert, setAlert] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        locations,
        setLocations,
        setCity,
        city,
        alert,
        setAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
