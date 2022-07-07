import { useEffect, useState, cloneElement, Children } from 'react';
import { cacheStorageSave, cacheStorageRead } from 'utils/cache';
import { now, addMinutesToDate } from 'utils/datetime';
import { getRandomImage } from './api';
import { imageOptimisation } from 'utils/image';
import './index.css';
import Credits from './credits';
import { getPalette } from './paletteFinder';
import { customPalette } from 'components/Util/initialPalatte';

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
      let imagePalette = {};
      const nowTime = now();

      if (
        cachedimageInfoBlock != null &&
        addMinutesToDate(new Date(cachedimageInfoBlock.updateBy), timeLimit) >
          nowTime
      ) {
        imageInfoBlock = cachedimageInfoBlock.data;
        imagePalette = cacheStorageRead('Unsplash-imagePalette').data; // read saved palette for the image
        props.setThemeUpdate(customPalette(imagePalette));
      } else {
        imageInfoBlock = await getRandomImage();
        imageInfoBlock = imageInfoBlock[0];
        cacheStorageSave(
          'Unsplash-imageInfoBlock',
          imageInfoBlock,
          nowTime,
          addMinutesToDate(nowTime, timeLimit),
        );

        getPalette(imageInfoBlock.src + '/?' + params).then(extracts => {
          imagePalette = extracts; // setting value on new image
          props.setThemeUpdate(customPalette(imagePalette));
          cacheStorageSave(
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

  useEffect(() => {
    // const { colors } = useImageColor(imageUrl, { cors: true, colors: 5 })
    // console.log(colors)
  }, [imageUrl]);

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
