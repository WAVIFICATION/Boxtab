import { useEffect, useState } from 'react';
import ClockPlugin from './analogClock';

function Clock(props) {
  return (
    <div>
      <ClockPlugin
        width={props.width}
        height={props.height}
        settings={props.settings}
      />
    </div>
  );
}

export default Clock;
