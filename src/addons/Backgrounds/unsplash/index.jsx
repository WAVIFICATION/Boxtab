import {
  useEffect, useState, cloneElement, Children,
} from 'react';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';
import { now, addMinutesToDate } from 'utils/datetime';
import { customPalette } from 'components/Util/initialPalatte';
import imageOptimisation from 'utils/image';
import config from 'config.json';
import getRandomImage from './api';
import './index.css';
import Credits from './credits';
import getPalette from '../../../utils/paletteFinder';

function Unsplash({
  width, height, setThemeUpdate, children,
}) {
  const params = new URLSearchParams();
  params.append('q', 85);
  params.append('w', imageOptimisation(width));

  const [imageUrl, setImageUrl] = useState('');
  const [creditsDetails, setcreditsDetails] = useState('');
  const { timeLimit } = config; // 5min

  useEffect(() => {
    const fetchImageInfoBlock = async () => {
      const cachedimageInfoBlock = await cacheStorageRead(
        'Unsplash-imageInfoBlock',
      );
      let imageInfoBlock = {};
      let imagePalette = [];
      const nowTime = now();

      if (
        cachedimageInfoBlock != null
        && addMinutesToDate(new Date(cachedimageInfoBlock.updateBy), timeLimit)
          > nowTime
      ) {
        imageInfoBlock = cachedimageInfoBlock.data;
        imagePalette = (await cacheStorageRead('Unsplash-imagePalette')).data; // read saved palette for the image
        setThemeUpdate(customPalette(imagePalette));
      } else {
        imageInfoBlock = await getRandomImage();
        imageInfoBlock = imageInfoBlock[0];
        await cacheStorageSave(
          'Unsplash-imageInfoBlock',
          imageInfoBlock,
          nowTime,
          addMinutesToDate(nowTime, timeLimit),
        );

        getPalette(`${imageInfoBlock.src}?${params}`).then(async (extracts) => {
          imagePalette = extracts; // setting value on new image
          setThemeUpdate(customPalette(imagePalette));
          await cacheStorageSave(
            'Unsplash-imagePalette',
            extracts,
            nowTime,
            addMinutesToDate(nowTime, timeLimit),
          );
        });
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
        width,
        height,
      }}
    >
      {Children.map(children, (child) => cloneElement(child, { height, width }, null))}
      <Credits credits={creditsDetails} />
    </div>
  );
}

export default Unsplash;
