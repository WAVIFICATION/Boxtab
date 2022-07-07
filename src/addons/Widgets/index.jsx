import React from 'react';
import Clock from './clock/';
import TextBox from './TextBox';

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
  } else if (props.type === 'TextBox') {
    return (
      <TextBox
        type={props.type}
        width={props.width}
        height={props.height}
        settings={props.settings}
      />
    );
  }
}
export default Widgets;
