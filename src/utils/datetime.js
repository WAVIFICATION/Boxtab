export function now() {
  return new Date();
}

export function addMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
