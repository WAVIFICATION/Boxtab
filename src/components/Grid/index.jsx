import React, { useEffect, useState } from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import Enclosure from 'components/Enclosure';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';
import { forwardRef, useImperativeHandle } from 'react';
import { nanoid } from 'nanoid';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import _ from 'lodash';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import TimerProvider from 'utils/timer';

const ReactGridLayout = WidthProvider(RGL);

const Grid = forwardRef((props, ref) => {
  const heightRatio = 50;
  const cols = 120;
  const rowHeight = 30;
  const removeStyle = {
    position: 'absolute',
    right: '0.25rem',
    top: 0,
  };

  const [layout, setLayout] = useState([]);
  const [widgetList, setWidgetList] = useState([]);
  const [enableEdit, setEnableEdit] = useState(false);

  useEffect(() => {
    const existingLayout = cacheStorageRead('layout');
    const existingWidgetList = cacheStorageRead('widgetList');
    setLayout(existingLayout ? JSON.parse(existingLayout.data) : []);

    setWidgetList(
      existingWidgetList ? JSON.parse(existingWidgetList.data) : [],
    ); // set widget list on initial load
  }, []);

  function updateWidgetListCache(widgetListCache) {
    cacheStorageSave('widgetList', JSON.stringify(widgetListCache));
  } // save widgetList to local storage if it gets updated

  function changedLayout(layout) {
    console.log('changed');
    setLayout(layout);
    cacheStorageSave('layout', JSON.stringify(layout));
  }

  function generateLayout(layout) {
    return (
      <div key={layout.i} style={{ overflow: 'hidden' }}>
        <TimerProvider>
          <Enclosure
            name={layout.i}
            height={layout.h * rowHeight}
            width={(layout.w * props.width) / cols}
            type={_.find(widgetList, { i: layout.i }).type}
            editVisible={enableEdit}
          />
        </TimerProvider>
        {enableEdit && (
          <IconButton
            color="primary"
            component="span"
            style={removeStyle}
            onClick={() => removeWidgets(layout.i)}
          >
            <CancelIcon />
          </IconButton>
        )}
      </div>
    );
  }

  useImperativeHandle(ref, () => ({
    addWidgets(params) {
      const id = nanoid();
      setLayout(
        layout.concat({
          i: id,
          x: cols / 2,
          y: props.height / (rowHeight * 2),
          h: props.height / (rowHeight * 10),
          w: cols / 10,
        }),
      );
      // console.log(params)
      const updatedWidgetList = widgetList.concat({
        i: id,
        type: params,
      });
      setWidgetList(updatedWidgetList);
      updateWidgetListCache(updatedWidgetList);
    },
  }));

  function removeWidgets(key) {
    setLayout(_.reject(layout, { i: key })); // removing from layout

    const updatedWidgetList = _.reject(widgetList, { i: key });
    setWidgetList(updatedWidgetList); //removing from widget list
    updateWidgetListCache(updatedWidgetList);
  }

  return (
    <>
      <Button
        onClick={() => setEnableEdit(!enableEdit)}
        style={{
          zIndex: '100',
          position: 'absolute',
          right: '3.25rem',
          top: '0.75rem',
        }}
      >
        <EditIcon />
      </Button>
      <div
        style={{
          height: props.height,
          width: props.width,
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={cols}
          rowHeight={rowHeight}
          onLayoutChange={changedLayout}
          compactType={null}
          isBounded={true}
          style={{ width: '100%', height: '100%' }}
          margin={[0, 0]}
          preventCollision={true}
          isDraggable={enableEdit}
          isResizable={enableEdit}
          useCSSTransforms={true}
          // allowOverlap={true}
        >
          {layout.map(generateLayout)}
        </ReactGridLayout>
      </div>
    </>
  );
});

Grid.displayName = 'Grid';
export default Grid;
