import PropTypes from 'prop-types'; // ES6
// import React from 'react';
import Widgets from 'addons/Widgets';
import { useState, useEffect } from 'react';
import GeneralWidgetsMenu from 'addons/Widgets/GeneralWidgetsMenu';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';

function Enclosure(props) {
  const [widgetSettingsData, setWidgetSettingsData] = useState({});

  useEffect(() => {
    if (Object.keys(widgetSettingsData).length != 0)
      cacheStorageSave(
        'widgetSettings-' + props.name,
        JSON.stringify(widgetSettingsData),
      );
  }, [widgetSettingsData]);

  useEffect(() => {
    const existingWidgetSettingsData = cacheStorageRead(
      'widgetSettings-' + props.name,
    );
    setWidgetSettingsData(
      existingWidgetSettingsData
        ? JSON.parse(existingWidgetSettingsData.data)
        : {},
    ); //TODO: DEFAULT SETTINGS
  }, []);

  return (
    <div style={{ display: 'inline-block' }}>
      {props.editVisible && (
        <GeneralWidgetsMenu
          name={props.name}
          widgetType={props.type}
          generalSettingsIntro={widgetSettingsData}
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
