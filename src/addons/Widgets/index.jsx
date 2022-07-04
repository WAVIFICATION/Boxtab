import React from 'react';
import ClockPlugin from './clock/AnalogClock';

function Widgets(props) {
  if (props.type === 'AnalogClock') {
    return <ClockPlugin width={props.width} height={props.height} />;
  }
}
export default Widgets;
