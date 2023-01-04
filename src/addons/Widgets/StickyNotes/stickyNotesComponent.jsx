import { Box, TextField } from '@mui/material';
import './index.css';

function StickyNotesComponent({
  note,
  setNote,
  // height,
}) {
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
        value={note}
        variant="standard"
        onChange={handleChange}
        sx={{ input: { color: 'black' } }}
      />
    </Box>
  );
}
export default StickyNotesComponent;
