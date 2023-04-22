import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailTest({ settings, cold, hour }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      if (
        settings.remind &&
        date.getHours() === 14 &&
        date.getMinutes() === 54 &&
        date.getSeconds() === 40
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
    }, 1000);
  }, []);

  return <div className="email-test">{time}</div>;
}

// emailjs
//           .send(
//             'service_jl6cwrk',
//             'template_rc57opn',
//             {
//               from_name: 'Weather App',
//               to_name: settings.name,
//               email: settings.email,
//               temp: cold,
//               time: hour,
//             },
//             'S3jaS_noYO-uFHLvl'
//           )
//           .then((res) => console.log(res))
//           .catch((err) => console.log(err));
