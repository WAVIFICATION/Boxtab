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
  const [textBoxValue, setTextBoxValue] = React.useState('');

  const handleChange = event => {
    setTextBoxValue(event.target.value);
  };

  useEffect(() => {
    setTextBoxValue(
      'textBoxValue' in props.settingsIntro
        ? props.settingsIntro.textBoxValue
        : '',
    ); //initialise value
  }, []);

  useEffect(() => {
    props.settingsOutro({ textBoxValue: textBoxValue });
  }, [textBoxValue]);

  return (
    <TextField
      id="outlined-basic"
      label="Display Text"
      variant="outlined"
      onChange={handleChange}
      value={textBoxValue}
      onKeyDown={stopPropagation}
    />
  );
}

export default Menu;
