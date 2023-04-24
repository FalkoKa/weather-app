import { Switch } from '@mui/material';
import { useState } from 'react';
import Reminder from '../Reminder/Reminder';
import kelvinToCelsius from '../../utils/converter/kelvinToCelsius';
import EmailTest from './email';

export default function BabyMode({ data }) {
  const [isBabyMode, setIsBabyMode] = useState(false);
  const [isReminding, setIsReminding] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [settings, setSettings] = useState({
    bedtime: 19,
    remindTime: 20,
    email: 'falkokammel@gmx.de',
    name: 'Falko',
    remind: true,
  });

  const changeBabyMode = (e) => {
    setIsBabyMode(!isBabyMode);
    setIsSaved(false);
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

  // coldest temperature between 11pm and 6am
  console.log(kelvinToCelsius(coldestTemperature(nightData).temp));

  // time of coldest temperature
  console.log(
    new Date(coldestTemperature(nightData).dt * 1000).getHours() + ' am'
  );

  console.log(coldestTemperature(nightData));

  // drop by how many degrees
  console.log(
    tempDropBy(data, settings.bedtime, coldestTemperature(nightData).temp)
  );

  return (
    <div className="baby-mode">
      {console.log(settings)}
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
                    <option defaultValue={7} value={7}>
                      7 pm
                    </option>
                    <option value={20}>8 pm</option>
                    <option value={21}>9 pm</option>
                    <option value={22}>10 pm</option>
                    <option value={23}>11 pm</option>
                    <option value={24}>12 am</option>
                  </select>
                </div>

                <p>
                  coldest temperature tonight will drop X (degeree(8pm) -
                  degree(coldest)) degrees to just X (degree(coldest)) degrees
                  at Xam
                </p>
                <div className="reminder-checkbox">
                  <input
                    onChange={changeIsReminding} // can have another function to set settings true or false when ticking?
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
                      onChange={handleInput}
                      name="remindTime"
                      id="reminder-time"
                    >
                      <option selected value={8}>
                        8 pm
                      </option>
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
