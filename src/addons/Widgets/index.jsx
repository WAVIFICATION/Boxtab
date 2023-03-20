import WidgetConfig from './widgetConfig.json';
import Clock from './clock';
import TextBox from './TextBox';
import StickyNotes from './StickyNotes';

function Widgets({
  type, width, height, settings, name,
}) {
  if (
    type === WidgetConfig.WIDGET_TYPE_ANALOGCLOCK
    || type === WidgetConfig.WIDGET_TYPE_DIGITALCLOCK
  ) {
    return (
      <Clock type={type} width={width} height={height} settings={settings} />
    );
  }
  if (type === WidgetConfig.WIDGET_TYPE_TEXTBOX) {
    return (
      <TextBox type={type} width={width} height={height} settings={settings} />
    );
  }
  if (type === WidgetConfig.WIDGET_TYPE_STICKYNOTES) {
    return <StickyNotes name={name} height={height} />;
  }
}
export default Widgets;
