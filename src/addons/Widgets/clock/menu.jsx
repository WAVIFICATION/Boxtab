import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import moment from 'moment-timezone';
import TextField from '@mui/material/TextField';

function Menu(props) {
  const listOfTimezones = moment.tz.names();
  listOfTimezones.push('default');
  const [timeZone, setTimeZone] = React.useState('default');

  const handleChange = event => {
    setTimeZone(event.target.value);
  };
  // console.log(listOfTimezones);
  return (
    <FormControl fullWidth>
      {/* <Autocomplete
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={timeZone}
        label="Age"
        onChange={handleChange}
        defaultValue={'default'}
        // native={true}
      >
        <MenuItem value={'default'} key={'default'}>
          {'default'}
        </MenuItem>
        {listOfTimezones.map(timeZone => {
          return (
            <MenuItem value={timeZone} key={timeZone}>
              {timeZone}
            </MenuItem>
          );
        })}
      </Autocomplete> */}

      <Autocomplete
        id="highlights-demo"
        style={{ width: '15rem' }}
        options={listOfTimezones}
        getOptionLabel={option => option}
        defaultValue={'default'}
        renderInput={params => (
          <TextField {...params} label="Timezone" margin="normal" />
        )}
        // renderOption={(props, options, { inputValue }) => {
        //   console.log(options)
        //   const parts = options.filter((val) => {
        //     val.startsWith(inputValue);
        //   })

        //   return (
        //     <li {...props}>
        //       <div>
        //         {parts.map((part, index) => (
        //          <MenuItem value={part} key={part}>
        //          {part}
        //        </MenuItem>
        //         ))}
        //       </div>
        //     </li>
        //   );
        // }}
      />
    </FormControl>
  );
}

export default Menu;
