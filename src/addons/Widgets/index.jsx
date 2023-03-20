import ListOfWidgets from './ListOfWidgets';

function Widgets({
  type, width, height, settings, name,
}) {
  const widgetComponent = ListOfWidgets.find((elem) => elem.WidgetName === type);
  return (
    <widgetComponent.Component
      name={name}
      type={type}
      width={width}
      height={height}
      settings={settings}
    />
  );
}
export default Widgets;
