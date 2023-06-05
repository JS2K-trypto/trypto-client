export default function convertInputDate(date: Date) {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

  const hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minute =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

  return `${year}-${month}-${day} ${hour}:${minute}:00`;
}
