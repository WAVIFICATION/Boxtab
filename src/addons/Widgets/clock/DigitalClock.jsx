import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import { timeZoneDelta } from 'utils/datetime';
import { useTimer } from 'utils/timer';
import Typography from '@mui/material/Typography';
import moment from 'moment-timezone';

function DigitalClock(props) {
  let tzDiff = 0;
  const { timer } = useTimer();

  if (props.settings.timeZone) tzDiff = timeZoneDelta(props.settings.timeZone);

  const [value, setValue] = useState(moment().add(tzDiff, 'minutes'));

  useEffect(() => {
    setValue(moment().add(tzDiff, 'minutes'));
  }, [timer, props.settings]);

  return (
    <Typography
      className="foreground"
      align={'center'}
      style={{
        fontSize: props.width / 8,
      }}
    >
      {value.format('h : mm : ss a')}
    </Typography>
  );
}

export default DigitalClock;
