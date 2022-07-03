import { useEffect, useState, cloneElement } from 'react';
import getRandomImage from './api';
import './index.css';
import Credits from './Credits';

function Unsplash(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [creditsDetails, setcreditsDetails] = useState('');

    useEffect(() => {
        const fetchImageInfoBlock = async () => {
            const imageInfoBlock = await getRandomImage();
            setImageUrl(imageInfoBlock[0].src)
            setcreditsDetails(imageInfoBlock[0].credit)
        };
       fetchImageInfoBlock();
        
    }, [])
    return(
        <div
        className="fullscreen"
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined, width: props.width, height: props.height }}
        >
            
            {cloneElement(props.children, { height: props.height, width: props.width })}
            <Credits credits={creditsDetails}/>
        </div>
    );
}

export default Unsplash;