import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { timeZoneDelta, addMinutesToDate } from 'utils/datetime';
import { useTimer } from 'utils/timer';

function AnalogClock({ settings, height, width }) {
  let tzDiff = 0;
  const { timer } = useTimer();
  if (settings.timeZone) tzDiff = timeZoneDelta(settings.timeZone);
  const [value, setValue] = useState(addMinutesToDate(new Date(), tzDiff));

  useEffect(() => {
    setValue(addMinutesToDate(new Date(), tzDiff));
  }, [timer, settings]);

  return <Clock value={value} size={Math.min(height, width)} />;
}

export default AnalogClock;
