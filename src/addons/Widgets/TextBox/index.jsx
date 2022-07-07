import TextBoxComponent from './textBoxComponent';

function TextBox(props) {
  return (
    <TextBoxComponent
      width={props.width}
      height={props.height}
      text={props.settings.textBoxValue}
    />
  );
}

export default TextBox;
