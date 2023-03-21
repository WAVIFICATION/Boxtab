import * as React from 'react';
// import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import './index.css';

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({
  theme, dayIsBetween, isFirstDay, isLastDay,
}) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

function Day(props) {
  const {
    day, selectedDay, height, width, ...other
  } = props;

  return (
    <CustomPickersDay
      sx={{
        height,
        width,
        fontSize: height / 6,
      }}
      {...other}
      day={day}
      disableMargin
    />
  );
}

// Day.propTypes = {
//   /**
//    * The date to show.
//    */
//   day: PropTypes.object.isRequired,
//   selectedDay: PropTypes.object,
// };

export default function CustomDay({ height, width }) {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          height,
          width,
          maxHeight: height,
        }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slots={{ day: Day }}
        slotProps={{
          day: {
            selectedDay: value,
            height: (height - 94) / 6,
            width: (height - 94) / 6,
          },
        }}
      />
    </LocalizationProvider>
  );
}
