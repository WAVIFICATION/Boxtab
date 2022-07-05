import PropTypes from 'prop-types'; // ES6
import React from 'react';
import Widgets from 'addons/Widgets';
import GeneralWidgetsMenu from 'addons/Widgets/GeneralWidgetsMenu';

function Enclosure(props) {
  return (
    <div style={{ display: 'inline-block' }}>
      {props.editVisible && <GeneralWidgetsMenu widgetType={props.type} />}
      <Widgets width={props.width} height={props.height} type={props.type} />
    </div>
  );
}
export default Enclosure;
