import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import stopPropagation from 'utils/stopPropogation';

function Menu({ settingsIntro, settingsOutro }) {
  const [textBoxValue, setTextBoxValue] = useState('');

  const handleChange = (event) => {
    setTextBoxValue(event.target.value);
  };

  useEffect(() => {
    setTextBoxValue(
      'textBoxValue' in settingsIntro ? settingsIntro.textBoxValue : '',
    ); // initialise value
  }, []);

  useEffect(() => {
    settingsOutro({ textBoxValue });
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
