import React from 'react';
import Clock from './clock/';

function Widgets(props) {
  if (props.type === 'AnalogClock') {
    return (
      <Clock
        width={props.width}
        height={props.height}
        settings={props.settings}
      />
    );
  }
}
export default Widgets;
