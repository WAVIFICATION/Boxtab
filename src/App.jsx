import React from 'react';
import Grid from './GridLayout/Grid';
import Background from './Addons/Backgrounds'
import useWindowDimensions from './Util/WindowDimension'
import GeneralSettings from './Settings/GeneralSettings';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const { height, width } = useWindowDimensions();
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  return (
          <>
            <ThemeProvider theme={darkTheme}>
              <Background width={width} height={height} model={'Unsplash'}>
                <GeneralSettings />
                <Grid width={width} height={height}/>
              </Background>
            </ThemeProvider>
          </>
  );
}

export default App;
