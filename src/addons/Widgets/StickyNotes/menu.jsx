import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Select, MenuItem } from '@mui/material';

const FONT_SIZES = [8, 12, 16, 18, 24];

function Menu({ settingsIntro, settingsOutro }) {
  const [fontSize, setfontSize] = useState(12);

  const handleChange = (event) => {
    setfontSize(event.target.value);
  };

  useEffect(() => {
    setfontSize(settingsIntro.fontSize ?? ''); // initialise value
  }, []);

  useEffect(() => {
    settingsOutro({ fontSize });
  }, [fontSize]);

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl>
        <InputLabel id="sticky-notes menu-label-text">Size</InputLabel>
        <Select
          id="sticky-notes menu"
          labelId="sticky-notes menu-label-text"
          value={fontSize}
          label="Size"
          onChange={handleChange}
        >
          {FONT_SIZES.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Menu;
