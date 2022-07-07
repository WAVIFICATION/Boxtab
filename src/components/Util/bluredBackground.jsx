import { Box } from '@mui/material';
export default function BlurBackground(props) {
  return (
    <Box
      style={{
        // filter: 'blur(4px)',
        position: 'absolute',
        backgroundSize: 'cover',
        opacity: 0.35,
        backgroundColor: 'grey',
        backdropFilter: 'blur(5px)',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      sx={{ width: props.width, height: props.height }}
    >
      {'children' in props ? props.children : ''}
    </Box>
  );
}
