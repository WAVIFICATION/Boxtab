import Grid from 'components/Grid';
import Background from 'addons/Backgrounds';
import useWindowDimensions from 'utils/windowDimension';
import GeneralSettings from 'containers/GeneralSettings';
import { ThemeProvider } from '@mui/material/styles';
import { useRef, useState } from 'react';
import { initialPalette } from 'utils/initialPalatte';

function App() {
  const { height, width } = useWindowDimensions();
  const addWidgetsRef = useRef();
  const [themeUpdate, setThemeUpdate] = useState(initialPalette());

  return (
    <ThemeProvider theme={themeUpdate}>
      <Background
        width={width}
        height={height}
        model="Unsplash"
        setThemeUpdate={setThemeUpdate}
      >
        <GeneralSettings
          addWidgets={(data) => addWidgetsRef.current.addWidgets(data)}
        />
        <Grid ref={addWidgetsRef} width={width} height={height} />
      </Background>
    </ThemeProvider>
  );
}

export default App;
