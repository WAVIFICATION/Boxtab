import { useEffect, useState, cloneElement, Children } from 'react';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';
import { now, addMinutesToDate } from 'utils/datetime';
import { getRandomImage } from './api';
import { imageOptimisation } from 'utils/image';
import './index.css';
import Credits from './credits';

function Unsplash(props) {
  const params = new URLSearchParams();
  params.append('q', 85);
  params.append('w', imageOptimisation(props.width));

  const [imageUrl, setImageUrl] = useState('');
  const [creditsDetails, setcreditsDetails] = useState('');
  const timeLimit = 5; //5min

  useEffect(() => {
    const fetchImageInfoBlock = async () => {
      const cachedimageInfoBlock = cacheStorageRead('Unsplash-imageInfoBlock');
      let imageInfoBlock = {};
      const now = now()();

      if (
        cachedimageInfoBlock != null &&
        addMinutesToDate(new Date(cachedimageInfoBlock.updateBy), timeLimit) >
          now
      ) {
        imageInfoBlock = cachedimageInfoBlock.data;
      } else {
        imageInfoBlock = await getRandomImage();
        imageInfoBlock = imageInfoBlock[0];
        cacheStorageSave(
          'Unsplash-imageInfoBlock',
          imageInfoBlock,
          now,
          addMinutesToDate(now, timeLimit),
        );
      }
      setImageUrl(imageInfoBlock.src);
      setcreditsDetails(imageInfoBlock.credit);
    };
    fetchImageInfoBlock();
  }, []);

  return (
    <div
      className="fullscreen"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl}?${params})` : undefined,
        width: props.width,
        height: props.height,
      }}
    >
      {Children.map(props.children, child => {
        return cloneElement(
          child,
          { height: props.height, width: props.width },
          null,
        );
      })}
      <Credits credits={creditsDetails} />
    </div>
  );
}

export default Unsplash;
