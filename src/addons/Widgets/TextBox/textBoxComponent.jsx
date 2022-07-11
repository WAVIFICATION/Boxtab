import { Typography } from '@mui/material';
import config from 'config.json';

function TextBoxComponent({ text, height }) {
  return (
    <Typography
      className="foreground"
      align="center"
      style={{
        fontSize: height * config.textHeightRatio,
      }}
    >
      {text}
    </Typography>
  );
}

export default TextBoxComponent;
