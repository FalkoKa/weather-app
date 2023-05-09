import { useState } from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import { ToggleButton, ToggleButtonGroup, Radio } from "@mui/material";

const Forecast = ({ data }) => {
  const [forecast, setForecast] = useState("daily");
  const [selectedValue, setSelectedValue] = useState("1");

  function changeHandler(e) {
    setForecast(e.target.value);
  }

  function handleHourlyRadio(e) {
    setSelectedValue(e.target.value);
  }

  function calculateSlice() {
    if (selectedValue == 1) {
      return 0;
    } else if (selectedValue == 2) {
      return 8;
    } else {
      return 16;
    }
  }

  return (
    <div className="forecast">
      <ToggleButtonGroup
        color="primary"
        value={forecast}
        exclusive
        onChange={changeHandler}
      >
        <ToggleButton
          style={{
            backgroundColor: `${forecast === "daily" ? "#c8e2ff" : "white"}`,
            color: "black",
            border: "1px solid black",
            fontWeight: 700,
          }}
          value="daily"
        >
          Daily
        </ToggleButton>
        <ToggleButton
          style={{
            backgroundColor: `${forecast === "hourly" ? "#c8e2ff" : "white"}`,
            color: "black",
            border: "1px solid black",
            fontWeight: 700,
          }}
          value="hourly"
        >
          Hourly
        </ToggleButton>
      </ToggleButtonGroup>
      {forecast === "daily" ? (
        <DailyForecast data={data.daily} />
      ) : (
        <>
          <Radio
            checked={selectedValue === "1"}
            onChange={handleHourlyRadio}
            value="1"
            name="radio-buttons"
            inputProps={{ "aria-label": "1" }}
            style={{ color: "white" }}
          />
          <Radio
            checked={selectedValue === "2"}
            onChange={handleHourlyRadio}
            value="2"
            name="radio-buttons"
            inputProps={{ "aria-label": "2" }}
            style={{ color: "white" }}
          />

          <Radio
            checked={selectedValue === "3"}
            onChange={handleHourlyRadio}
            value="3"
            name="radio-buttons"
            inputProps={{ "aria-label": "3" }}
            style={{ color: "white" }}
          />

          <HourlyForecast
            data={data.hourly.slice(calculateSlice(), calculateSlice() + 8)}
          />
        </>
      )}
    </div>
  );
};
export default Forecast;
