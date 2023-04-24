export default function Reminder({ settings }) {
  return (
    <p>
      {console.log(settings)}
      You will get a reminder message at {settings.remindTime}:00
    </p>
  );
}
