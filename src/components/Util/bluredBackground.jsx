import { Box } from '@mui/material';

export default function BlurBackground({ width, height, children }) {
  return (
    <Box
      style={{
        // filter: 'blur(4px)',
        position: 'absolute',
        // backgroundSize: 'cover',
        // opacity: 0.35,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(5px)',
        backgroundImage:
          'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
        top: 0,
        left: 0,
        zIndex: -1,
        borderRadius: 20,
      }}
      sx={{ width, height }}
    >
      {children ?? ''}
    </Box>
  );
}
