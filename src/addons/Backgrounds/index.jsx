import Unsplash from './unsplash';

function Background(props) {
  if (props.model === 'Unsplash') {
    return (
      <Unsplash height={props.height} width={props.width}>
        {props.children}
      </Unsplash>
    );
  }
}
export default Background;
