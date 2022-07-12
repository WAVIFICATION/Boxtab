import TextBoxComponent from './textBoxComponent';

function TextBox({ width, height, settings }) {
  return (
    <TextBoxComponent
      width={width}
      height={height}
      text={settings.textBoxValue}
    />
  );
}

export default TextBox;
