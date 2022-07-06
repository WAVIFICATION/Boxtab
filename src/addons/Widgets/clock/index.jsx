import { useEffect, useState } from 'react';
import AnalogClock from './AnalogClock';
import DigitalClock from './DigitalClock';

function Clock(props) {
  if (props.type === 'AnalogClock') {
    return (
      <AnalogClock
        width={props.width}
        height={props.height}
        settings={props.settings}
      />
    );
  } else if (props.type === 'DigitalClock') {
    return (
      <DigitalClock
        width={props.width}
        height={props.height}
        settings={props.settings}
      />
    );
  }
}

export default Clock;
