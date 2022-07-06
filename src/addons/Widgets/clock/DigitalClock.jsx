import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import { addMinutesToDate } from 'utils/datetime';
import { timeZoneDelta } from 'utils/datetime';
import { useTimer } from 'utils/timer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment-timezone';
import { Box } from '@mui/system';

function DigitalClock(props) {
  let tzDiff = 0;
  const { timer } = useTimer();

  if (props.settings.timeZone) tzDiff = timeZoneDelta(props.settings.timeZone);

  const [value, setValue] = useState(moment().add(tzDiff, 'minutes'));

  useEffect(() => {
    setValue(moment().add(tzDiff, 'minutes'));
  }, [timer, props.settings]);

  return (
    <Card
      sx={{ width: props.width, height: props.height }}
      style={{ backgroundColor: 'transparent' }}
    >
      <CardContent>
        <Box
          style={{
            filter: 'blur(8px)',
            position: 'absolute',
            backgroundSize: 'cover',
            opacity: 0.125,
            backgroundColor: 'white',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
          sx={{ width: props.width, height: props.height }}
        ></Box>
        <Typography
          style={{
            fontSize: props.width / 7,
            filter: 'none',
            zIndex: 12,
            position: 'absolute',
          }}
        >
          {value.format('h : mm : ss a')}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DigitalClock;
