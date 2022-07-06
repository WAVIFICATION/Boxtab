import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { addMinutesToDate } from 'utils/datetime';
import { timeZoneDelta } from 'utils/datetime';
import { useTimer } from 'utils/timer';

function AnalogClock(props) {
  let tzDiff = 0;
  const { timer } = useTimer();
  if (props.settings.timeZone) tzDiff = timeZoneDelta(props.settings.timeZone);
  const [value, setValue] = useState(addMinutesToDate(new Date(), tzDiff));

  useEffect(() => {
    setValue(addMinutesToDate(new Date(), tzDiff));
  }, [timer, props.settings]);

  return <Clock value={value} size={Math.min(props.height, props.width)} />;
}

export default AnalogClock;
