import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { addMinutesToDate } from 'utils/datetime';
import moment from 'moment-timezone';
import { useTimer } from 'utils/timer';

function ClockPlugin(props) {
  let tzDiff = 0;
  const { timer } = useTimer();

  if (props.settings.timeZone) {
    var now = moment.utc();
    const currentNow = moment.tz.guess();
    const currentTz = moment.tz.zone(currentNow);
    const settingsTz = moment.tz.zone(
      props.settings.timeZone == 'default'
        ? currentNow
        : props.settings.timeZone,
    );
    tzDiff = settingsTz.utcOffset(now) - currentTz.utcOffset(now);
  }
  const [value, setValue] = useState(addMinutesToDate(new Date(), tzDiff));

  useEffect(() => {
    setValue(addMinutesToDate(new Date(), tzDiff));
  }, [timer, props.settings]);

  return (
    <div>
      <Clock value={value} size={Math.min(props.height, props.width)} />
    </div>
  );
}

export default ClockPlugin;
