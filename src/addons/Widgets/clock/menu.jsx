import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import moment from 'moment-timezone';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import stopPropagation from 'utils/stopPropogation';

function Menu({ settingsIntro, settingsOutro }) {
  const defaultTimeZone = 'timeZone' in settingsIntro ? settingsIntro.timeZone : 'default';
  const listOfTimezones = moment.tz.names();
  const [timeZone, setTimeZone] = useState(defaultTimeZone);
  const handleChange = (event) => {
    setTimeZone(event.target.textContent);
  };

  listOfTimezones.push('default');

  useEffect(() => {
    settingsOutro({ timeZone });
  }, [timeZone]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        id="highlights-demo"
        style={{ width: '15rem' }}
        options={listOfTimezones}
        // getOptionLabel={option => option}
        // defaultValue={defaultTimeZone}
        value={defaultTimeZone}
        onChange={handleChange}
        onKeyDown={stopPropagation}
        renderInput={(params) => (
          <TextField {...params} label="Timezone" margin="normal" />
        )}
      />
    </FormControl>
  );
}

export default Menu;
