import PropTypes from 'prop-types'; // ES6
import React from 'react';
import ClockPlugin from '../Widgets/Clock';

function Enclosure({ name }) {
  // console.log(props)

  return (
    <div style={{ backgroundColor: '#cccccc', display: 'inline-block' }}>
      {name}
      <ClockPlugin />
    </div>
  );
}
export default Enclosure;

Enclosure.propTypes = {
  name: PropTypes.string.isRequired,
};
