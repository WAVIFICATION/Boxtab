import { createTheme } from '@mui/material/styles';
export function initialPalette() {
  return createTheme({
    palette: {
      mode: 'light',
    },
  });
}

export function customPalette(imagePalette) {
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
