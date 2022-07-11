import Widgets from 'addons/Widgets';
import { useState, useEffect } from 'react';
import GeneralWidgetsMenu from 'addons/Widgets/GeneralWidgetsMenu';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';
import BlurBackground from 'components/Util/bluredBackground';
import Card from '@mui/material/Card';
import _ from 'lodash';

function Enclosure(props) {
  const [widgetSettingsData, setWidgetSettingsData] = useState({});

  useEffect(() => {
    if (!_.isEmpty(widgetSettingsData)) {
      cacheStorageSave(
        'widgetSettings-' + props.name,
        JSON.stringify(widgetSettingsData),
      );
    }
  }, [widgetSettingsData]);

  useEffect(() => {
    (async () => {
      const existingWidgetSettingsData = await cacheStorageRead(
        'widgetSettings-' + props.name,
      );
      setWidgetSettingsData(
        existingWidgetSettingsData
          ? JSON.parse(existingWidgetSettingsData.data)
          : {},
      ); //TODO: DEFAULT SETTINGS
    })();
  }, []);

  return (
    <div style={{ display: 'inline-block' }}>
      <Card
        sx={{ width: props.width, height: props.height }}
        style={{ backgroundColor: 'transparent', borderRadius: '0' }}
      >
        <BlurBackground width={props.width} height={props.height} />
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
      </Card>
    </div>
  );
}
export default Enclosure;
