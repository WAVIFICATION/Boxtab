import React from 'react';
import Grid from './GridLayout/Grid';
import Background from './Addons/Backgrounds'
import useWindowDimensions from './Util/WindowDimension'

function App() {
  const { height, width } = useWindowDimensions();
  return (
            <Background width={width} height={height} model={'Unsplash'}>
              <Grid />
            </Background>
  );
}

export default App;
