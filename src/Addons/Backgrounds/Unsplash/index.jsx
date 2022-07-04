import { useEffect, useState, cloneElement, Children } from 'react';
import {getRandomImage, imageOptimisation} from './api';
import './index.css';
import Credits from './Credits';
import {CacheStorageSave, CacheStorageRead} from '../../../Util/Cache';
import { Now, AddMinutesToDate } from '../../../Util/Datetime';

function Unsplash(props) {

  const params = new URLSearchParams();
  params.append('q',85);
  params.append('w', imageOptimisation(props.width))

  const [imageUrl, setImageUrl] = useState('');
  const [creditsDetails, setcreditsDetails] = useState('');
  const timeLimit = 5;//5min

  useEffect(() => {
    const fetchImageInfoBlock = async () => {
      const cachedimageInfoBlock = CacheStorageRead('Unsplash-imageInfoBlock');
      let imageInfoBlock = {};
      const now = Now();

      if (cachedimageInfoBlock!=null && AddMinutesToDate(new Date(cachedimageInfoBlock.updateBy), timeLimit) > now){
        imageInfoBlock = cachedimageInfoBlock.data;
      }
      else {
        imageInfoBlock = await getRandomImage();
        imageInfoBlock = imageInfoBlock[0]
        CacheStorageSave('Unsplash-imageInfoBlock', imageInfoBlock, now, AddMinutesToDate(now,timeLimit))
      }
      setImageUrl(imageInfoBlock.src)
      setcreditsDetails(imageInfoBlock.credit)
    };
      fetchImageInfoBlock();
      
  }, []);

  return(
      <div
      className="fullscreen"
      style={{ backgroundImage: imageUrl ? `url(${imageUrl}?${params})` : undefined, width: props.width, height: props.height }}
      >
          
          {
            Children.map(props.children, child => {
              return cloneElement(child, { height: props.height, width: props.width }, null)
            })
          }
          <Credits credits={creditsDetails}/>
      </div>
  );
}

export default Unsplash;