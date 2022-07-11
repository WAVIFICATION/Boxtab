import Widgets from 'addons/Widgets';
import { useState, useEffect } from 'react';
import GeneralWidgetsMenu from 'addons/Widgets/GeneralWidgetsMenu';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';
import BlurBackground from 'components/Util/bluredBackground';
import Card from '@mui/material/Card';
import _ from 'lodash';

function Enclosure({
  name, height, width, type, editVisible,
}) {
  const [widgetSettingsData, setWidgetSettingsData] = useState({});

  useEffect(() => {
    if (!_.isEmpty(widgetSettingsData)) {
      cacheStorageSave(
        `widgetSettings-${name}`,
        JSON.stringify(widgetSettingsData),
      );
    }
  }, [widgetSettingsData]);

  useEffect(() => {
    (async () => {
      const existingWidgetSettingsData = await cacheStorageRead(
        `widgetSettings-${name}`,
      );
      setWidgetSettingsData(
        existingWidgetSettingsData
          ? JSON.parse(existingWidgetSettingsData.data)
          : {},
      ); // TODO: DEFAULT SETTINGS
    })();
  }, []);

  return (
    <div style={{ display: 'inline-block' }}>
      <Card
        sx={{ width, height }}
        style={{ backgroundColor: 'transparent', borderRadius: '0' }}
      >
        <BlurBackground width={width} height={height} />
        {editVisible && (
          <GeneralWidgetsMenu
            name={name}
            widgetType={type}
            generalSettingsIntro={widgetSettingsData}
            generalSettingsOutro={setWidgetSettingsData}
          />
        )}
        <Widgets
          width={width}
          height={height}
          type={type}
          settings={widgetSettingsData}
        />
      </Card>
    </div>
  );
}
export default Enclosure;
