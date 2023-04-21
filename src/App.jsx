import Home from "./pages/Home/Home";
import Weather from "./pages/Weather/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:city" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
