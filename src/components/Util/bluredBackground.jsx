import { Box } from '@mui/material';

export default function BlurBackground({ width, height, children }) {
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
      sx={{ width, height }}
    >
      {children ?? ''}
    </Box>
  );
}
