import { createTheme } from '@mui/material/styles';

export function initialPalette() {
  return createTheme({
    palette: {
      mode: 'dark',
    },
  });
}

export function customPalette(imagePalette) {
  if (!imagePalette) {
    return createTheme({
      palette: {
        mode: 'dark',
      },
    });
  }

  return createTheme({
    palette: {
      mode: 'dark',
      text: {
        primary: imagePalette[1],
        secondary: imagePalette[1],
      },
    },
  });
}
