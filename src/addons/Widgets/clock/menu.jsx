import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import moment from 'moment-timezone';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';

function Menu(props) {
  const listOfTimezones = moment.tz.names();
  listOfTimezones.push('default');
  const [timeZone, setTimeZone] = React.useState('default');

  const handleChange = event => {
    // console.log(event)
    setTimeZone(event.target.textContent);
  };
  // console.log(listOfTimezones);

  useEffect(() => {
    console.log('timeZone changed in clockmenu');
    console.log(timeZone);
    props.settingsOutro({ timeZone: timeZone });
  }, [timeZone]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        id="highlights-demo"
        style={{ width: '15rem' }}
        options={listOfTimezones}
        getOptionLabel={option => option}
        defaultValue={'default'}
        onChange={handleChange}
        renderInput={params => (
          <TextField {...params} label="Timezone" margin="normal" />
        )}
      />
    </FormControl>
  );
}

export default Menu;
