import momentTz from 'moment-timezone';

export function now() {
  return new Date();
}

export function addMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export function timeZoneDelta(timeZone) {
  const nowTime = momentTz.utc();
  const currentNow = momentTz.tz.guess();
  const currentTz = momentTz.tz.zone(currentNow);
  const settingsTz = momentTz.tz.zone(
    timeZone === 'default' ? currentNow : timeZone,
  );
  return currentTz.utcOffset(nowTime) - settingsTz.utcOffset(nowTime);
}
