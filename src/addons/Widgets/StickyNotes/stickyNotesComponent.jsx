import { Box, TextField } from '@mui/material';
import './index.css';

function StickyNotesComponent({ note, setNote, fontSize }) {
  const handleChange = (event) => {
    setNote(event.target.value);
  };
  return (
    <Box className="notes">
      <TextField
        className="noteField"
        placeholder="Note"
        multiline
        minRows={500}
        fullWidth
        // color="black"
        value={note}
        variant="standard"
        onChange={handleChange}
        // sx={{ input: { color: 'black', background: 'green' } }}
        inputProps={{ style: { color: 'black', fontSize } }}
      />
    </Box>
  );
}
export default StickyNotesComponent;
