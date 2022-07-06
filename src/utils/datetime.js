import moment from 'moment-timezone';

export function now() {
  return new Date();
}

export function addMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export function timeZoneDelta(timeZone) {
  var now = moment.utc();
  const currentNow = moment.tz.guess();
  const currentTz = moment.tz.zone(currentNow);
  const settingsTz = moment.tz.zone(
    timeZone == 'default' ? currentNow : timeZone,
  );
  return settingsTz.utcOffset(now) - currentTz.utcOffset(now);
}
