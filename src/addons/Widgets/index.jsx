import Clock from './clock';
import TextBox from './TextBox';

function Widgets({
  type, width, height, settings,
}) {
  if (type === 'AnalogClock' || type === 'DigitalClock') {
    return (
      <Clock type={type} width={width} height={height} settings={settings} />
    );
  }
  if (type === 'TextBox') {
    return (
      <TextBox type={type} width={width} height={height} settings={settings} />
    );
  }
}
export default Widgets;
