import { useEffect, useState } from 'react';
import setDays from '../../utils/converter/setDays';
import setMonths from '../../utils/converter/setMonths';

export default function TimeAndDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDate(date);
    }, 1000);
  }, []);
  return (
    <p>
      {setDays(date.getDay())}, {date.getDate()}st {setMonths(date)}
      {', '}
      {date.toLocaleTimeString()}
    </p>
  );
}
