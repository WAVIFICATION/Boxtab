import React from 'react';
import Clock from './clock/';

function Widgets(props) {
  if (props.type === 'AnalogClock' || props.type === 'DigitalClock') {
    return (
      <Clock
        type={props.type}
        width={props.width}
        height={props.height}
        settings={props.settings}
      />
    );
  }
}
export default Widgets;
