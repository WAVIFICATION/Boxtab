import React, { useEffect, useState } from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import Enclosure from './Enclosure';

const ReactGridLayout = WidthProvider(RGL);

function Grid(props) {
  const heightRatio = 50;
  const cols = 12;
  const rowHeight = 60;

  const [layout, setLayout] = useState([]);
  useEffect(() => {
    const existingLayout = localStorage.getItem('Boxtab-layout');
    setLayout(existingLayout ? JSON.parse(existingLayout) : [ { i: 'a', x: 0, y: 0, w: 1, h: 2, }, { i: 'b', x: 1, y: 0, w: 3, h: 2, }, { i: 'c', x: 4, y: 0, w: 1, h: 2, }, ]);
  },[]);


  function changedLayout(layout) {
    setLayout(layout)
    localStorage.setItem('Boxtab-layout', JSON.stringify(layout));
  }

  function generateLayout(layout) {
    return (
      <div key={layout.i} style={{ overflow: 'hidden' }}>
        <Enclosure name={layout.i} height={layout.h*rowHeight} width={layout.w*props.width/cols} />
      </div>
    );
  }

  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={cols}
      rowHeight={rowHeight}
      onLayoutChange={changedLayout}
      compactType={null}
      isBounded={true}
      style={{width: '100%', height: '100%'}}
      margin={[0,0]}
      preventCollision={true}
    >
      {layout.map(generateLayout)}
    </ReactGridLayout>
  );
}

export default Grid;
