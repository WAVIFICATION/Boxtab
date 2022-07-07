import { Typography } from '@mui/material';
function TextBoxComponent(props) {
  const textLength = (props.text ? props.text.length : 1) / 1.5;
  return (
    <Typography
      className="foreground"
      align={'center'}
      style={{
        fontSize: props.width / textLength,
      }}
    >
      {props.text}
    </Typography>
  );
}

export default TextBoxComponent;
