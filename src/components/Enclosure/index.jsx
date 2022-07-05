import PropTypes from 'prop-types'; // ES6
// import React from 'react';
import Widgets from 'addons/Widgets';
import { useState } from 'react';
import GeneralWidgetsMenu from 'addons/Widgets/GeneralWidgetsMenu';

function Enclosure(props) {
  const [widgetSettingsData, setWidgetSettingsData] = useState({});
  return (
    <div style={{ display: 'inline-block' }}>
      {props.editVisible && (
        <GeneralWidgetsMenu
          widgetType={props.type}
          generalSettingsOutro={setWidgetSettingsData}
        />
      )}
      <Widgets
        width={props.width}
        height={props.height}
        type={props.type}
        settings={widgetSettingsData}
      />
    </div>
  );
}
export default Enclosure;
