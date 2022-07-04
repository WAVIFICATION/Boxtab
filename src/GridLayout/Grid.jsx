import React, { useEffect, useState } from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import Enclosure from './Enclosure';
import { CacheStorageSave, CacheStorageRead } from '../Util/Cache';
import { forwardRef, useImperativeHandle } from 'react';
import { nanoid } from 'nanoid';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import _ from 'lodash';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const ReactGridLayout = WidthProvider(RGL);

const Grid = forwardRef((props, ref) => {
  const heightRatio = 50;
  const cols = 120;
  const rowHeight = 30;
  const removeStyle = {
    position: 'absolute',
    right: '2px',
    top: 0,
  };

  const [layout, setLayout] = useState([]);
  const [enableEdit, setEnableEdit] = useState(false);

  useEffect(() => {
    const existingLayout = CacheStorageRead('layout');
    setLayout(
      existingLayout
        ? JSON.parse(existingLayout.data)
        : [
            { i: 'a', x: 0, y: 0, w: 1, h: 2 },
            { i: 'b', x: 1, y: 0, w: 3, h: 2 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 },
          ],
    );
  }, []);

  function changedLayout(layout) {
    setLayout(layout);
    CacheStorageSave('layout', JSON.stringify(layout));
  }

  function generateLayout(layout) {
    return (
      <div key={layout.i} style={{ overflow: 'hidden' }}>
        <Enclosure
          name={layout.i}
          height={layout.h * rowHeight}
          width={(layout.w * props.width) / cols}
          type="AnalogClock"
        />
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
      setLayout(
        layout.concat({
          i: nanoid(),
          x: cols / 2,
          y: props.height / (rowHeight * 2),
          h: props.height / (rowHeight * 25),
          w: cols / 25,
        }),
      );
    },
  }));

  function removeWidgets(key) {
    setLayout(_.reject(layout, { i: key }));
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
          allowOverlap={true}
          compactType={null}
          isBounded={true}
          style={{ width: '100%', height: '100%' }}
          margin={[0, 0]}
          preventCollision={true}
          isDraggable={enableEdit}
          isResizable={enableEdit}
        >
          {layout.map(generateLayout)}
        </ReactGridLayout>
      </div>
    </>
  );
});

Grid.displayName = 'Grid';
export default Grid;
