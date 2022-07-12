import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import { timeZoneDelta } from 'utils/datetime';
import { useTimer } from 'utils/timer';
import Typography from '@mui/material/Typography';
import moment from 'moment-timezone';
import config from 'config.json';

function DigitalClock({ settings, height }) {
  const { timer } = useTimer();
  const tzDiff = settings.timeZone ? timeZoneDelta(settings.timeZone) : 0;
  const [value, setValue] = useState(moment().add(tzDiff, 'minutes'));

  useEffect(() => {
    setValue(moment().add(tzDiff, 'minutes'));
  }, [timer, settings]);

  return (
    <Typography
      className="foreground"
      align="center"
      style={{
        fontSize: height * config.textHeightRatio,
      }}
    >
      {value.format('h : mm : ss a')}
    </Typography>
  );
}

export default DigitalClock;
