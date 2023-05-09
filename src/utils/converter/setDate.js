export default function setDate(timestamp) {
  const dateObj = new Date(timestamp * 1000);
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    dateObj
  );
  const date = dateObj.getDate();

  const formattedDate = `${month} ${date}`;

  return formattedDate;
}
