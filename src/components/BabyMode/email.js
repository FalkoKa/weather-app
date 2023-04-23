import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailTest({ settings, cold, hour }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      if (
        settings.remind &&
        date.getHours() === settings.remindTime &&
        date.getMinutes() === 1 &&
        date.getSeconds() === 1
      ) {
        emailjs
          .send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            {
              from_name: 'Weather App',
              to_name: settings.name,
              email: settings.email,
              temp: cold,
              time: hour,
            },
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }

      setTime(date.toTimeString());
    }, 990);
  }, []);

  return <div className="email-test">{time}</div>;
}
