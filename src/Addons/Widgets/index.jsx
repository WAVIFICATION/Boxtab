import React from 'react';
import ClockPlugin from './Clock';

function Widgets(props) {
    if (props.type === 'AnalogClock') {
        return <ClockPlugin width={props.width} height={props.height}/>
    }
}
export default Widgets;

