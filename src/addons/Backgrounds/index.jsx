import Unsplash from './unsplash';

function Background({
  model, height, width, children, setThemeUpdate,
}) {
  if (model === 'Unsplash') {
    return (
      <Unsplash height={height} width={width} setThemeUpdate={setThemeUpdate}>
        {children}
      </Unsplash>
    );
  }
}
export default Background;
