import AnalogClock from './AnalogClock';
import DigitalClock from './DigitalClock';

function Clock({
  type, width, height, settings,
}) {
  if (type === 'AnalogClock') {
    return <AnalogClock width={width} height={height} settings={settings} />;
  }
  if (type === 'DigitalClock') {
    return <DigitalClock width={width} height={height} settings={settings} />;
  }
}

export default Clock;
