import { Switch } from "@mui/material";
import { useState } from "react";
import Reminder from "../Reminder/Reminder";
import kelvinToCelsius from "../../utils/converter/kelvinToCelsius";
import EmailTest from "./email";

export default function BabyMode({ data }) {
  const [isBabyMode, setIsBabyMode] = useState(false);
  const [isReminding, setIsReminding] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [settings, setSettings] = useState({
    bedtime: 19,
    remindTime: 20,
    email: "",
    name: "",
    remind: false,
  });

  const changeBabyMode = (e) => {
    setIsBabyMode(!isBabyMode);
    setIsSaved(false);
    setIsReminding(false);
    setSettings({ ...settings, remind: false });
  };

  const changeIsReminding = (e) => {
    setIsReminding(!isReminding);
    setSettings({ ...settings, remind: true });
  };

  const handleSubmit = (e) => {
    setIsSaved(true);
  };

  const handleInput = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const nightData = data.filter((hour) => {
    let time = new Date(hour.dt * 1000).getHours();
    if (time > 22 || time < 7) {
      return true;
    } else {
      return false;
    }
  });

  const coldestTemperature = (data) => {
    data.sort((a, b) => a.temp - b.temp);
    return data[0];
  };

  const tempDropBy = (data, bedtime, coldestTemp) => {
    let tempAtBedtime = data.filter(
      (hour) => new Date(hour.dt * 1000).getHours() === bedtime
    )[0];

    return `${(tempAtBedtime.temp - 273.15 - (coldestTemp - 273.15)).toFixed(
      2
    )} °C`;
  };

  return (
    <div className="baby-mode">
      <EmailTest
        settings={settings}
        cold={kelvinToCelsius(coldestTemperature(nightData).temp)}
        hour={new Date(coldestTemperature(nightData).dt * 1000).getHours()}
      />
      <label htmlFor="babymode">Babymode</label>
      <Switch onChange={changeBabyMode} label="babymode" />
      {isBabyMode &&
        (isSaved ? (
          <Reminder settings={settings} />
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-baby-mode">
                <div className="bed-time-select">
                  <label htmlFor="bedtime">Bedtime: </label>
                  <select
                    value={settings.bedtime}
                    onChange={handleInput}
                    name="bedtime"
                    id="bedtime"
                  >
                    <option value={19}>7 pm</option>
                    <option value={20}>8 pm</option>
                    <option value={21}>9 pm</option>
                    <option value={22}>10 pm</option>
                    <option value={23}>11 pm</option>
                    <option value={24}>12 am</option>
                  </select>
                </div>

                <p>
                  coldest temperature tonight will drop by{" "}
                  {tempDropBy(data, 19, coldestTemperature(nightData).temp)} to
                  just {kelvinToCelsius(coldestTemperature(nightData).temp)} at{" "}
                  {new Date(
                    coldestTemperature(nightData).dt * 1000
                  ).getHours() + ":00"}
                </p>
                <div className="reminder-checkbox">
                  <input
                    onChange={changeIsReminding}
                    type="checkbox"
                    id="reminder"
                  />
                  <label htmlFor="reminder">Reminder</label>
                </div>
              </div>
              {isReminding && (
                <div className="reminder">
                  <div className="reminder-select">
                    <label htmlFor="reminder-time">Reminder Time: </label>
                    <select
                      value={settings.remindTime}
                      onChange={handleInput}
                      name="remindTime"
                      id="reminder-time"
                    >
                      <option value={8}>8 pm</option>
                      <option value={21}>9 pm</option>
                      <option value={22}>10 pm</option>
                      <option value={23}>11 pm</option>
                      <option value={24}>12 am</option>
                      <option value={1}>1 am</option>
                      <option value={2}>2 am</option>
                    </select>
                  </div>

                  <div className="name">
                    <label htmlFor="name">Name: </label>
                    <input
                      value={settings.name}
                      onChange={handleInput}
                      name="name"
                      type="text"
                      maxLength={10}
                      minLength={1}
                    />
                  </div>

                  <div className="contact-info">
                    <label htmlFor="email">Email: </label>
                    <input
                      value={settings.email}
                      onChange={handleInput}
                      name="email"
                      type="email"
                      id="email"
                    />
                  </div>
                </div>
              )}
              <button>save</button>
            </form>
          </div>
        ))}
    </div>
  );
}
