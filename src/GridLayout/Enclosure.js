import React from 'react';
import ClockPlugin from '../Widgets/Clock';
function Enclosure(props) {
    console.log(props)

    return (
        <div style={{backgroundColor:'#cccccc', display: 'inline-block'}}>
            {props.name}
            <ClockPlugin />
        </div>
    );

}
export default Enclosure;