import React from 'react';
import Grid from 'components/Grid';
import Background from './addons/Backgrounds';
import useWindowDimensions from 'utils/windowDimension';
import GeneralSettings from './containers/GeneralSettings';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRef, useEffect } from 'react';

function App() {
  const { height, width } = useWindowDimensions();
  const addWidgetsRef = useRef();

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Background width={width} height={height} model={'Unsplash'}>
          <GeneralSettings
            addWidgets={data => addWidgetsRef.current.addWidgets(data)}
          />
          <Grid ref={addWidgetsRef} width={width} height={height} />
        </Background>
      </ThemeProvider>
    </>
  );
}

export default App;
