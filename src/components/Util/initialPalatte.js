import { createTheme } from '@mui/material/styles';
export function initialPalette() {
  return createTheme({
    palette: {
      mode: 'light',
    },
  });
}

export function customPalette(imagePalette) {
  if (!imagePalette)
    return createTheme({
      palette: {
        mode: 'light',
      },
    });

  return createTheme({
    palette: {
      mode: 'light',
      text: {
        primary: imagePalette[1],
        secondary: imagePalette[1],
      },
    },
  });
}
