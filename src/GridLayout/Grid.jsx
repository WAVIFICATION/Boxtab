import React from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import Enclosure from './Enclosure';

const ReactGridLayout = WidthProvider(RGL);

function generateLayout(layout) {
  return (
    <div key={layout.i} style={{ overflow: 'hidden' }}>
      <Enclosure name={layout.i} />
    </div>
  );
}

function Grid() {
  // const verticalCompact = false;
  const layout = [
    {
      i: 'a',
      x: 0,
      y: 0,
      w: 1,
      h: 2,
    },
    {
      i: 'b',
      x: 1,
      y: 0,
      w: 3,
      h: 2,
    },
    {
      i: 'c',
      x: 4,
      y: 0,
      w: 1,
      h: 2,
    },
  ];
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      // width={1200}
      // isBounded={true}
      verticalCompact={false}
      // items={1200}
    >
      {layout.map(generateLayout)}
    </ReactGridLayout>
  );
}

export default Grid;
