import PropTypes from 'prop-types'; // ES6
import React from 'react';
import Widgets from '../Addons/Widgets';

function Enclosure(props) {
  return (
    <div style={{  display: 'inline-block' }}>
      <Widgets width={props.width} height={props.height} type ='AnalogClock'/>
    </div>
  );
}
export default Enclosure;
