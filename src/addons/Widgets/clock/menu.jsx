import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import moment from 'moment-timezone';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import stopPropagation from 'utils/stopPropogation';

function Menu(props) {
  const defaultTimeZone =
    'timeZone' in props.settingsIntro
      ? props.settingsIntro.timeZone
      : 'default';
  const listOfTimezones = moment.tz.names();
  const [timeZone, setTimeZone] = React.useState(defaultTimeZone);
  const handleChange = event => {
    setTimeZone(event.target.textContent);
  };

  listOfTimezones.push('default');

  useEffect(() => {
    props.settingsOutro({ timeZone: timeZone });
  }, [timeZone]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        id="highlights-demo"
        style={{ width: '15rem' }}
        options={listOfTimezones}
        getOptionLabel={option => option}
        // defaultValue={defaultTimeZone}
        value={defaultTimeZone}
        onChange={handleChange}
        onKeyDown={stopPropagation}
        renderInput={params => (
          <TextField {...params} label="Timezone" margin="normal" />
        )}
      />
    </FormControl>
  );
}

export default Menu;
