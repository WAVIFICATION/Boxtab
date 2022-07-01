import { useEffect, useState, cloneElement } from 'react';
// import getRandomImage from './api';
import './index.css';

function Unsplash(props) {
    // const url = 'https://images.unsplash.com/photo-1530273973427-22351773250c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1NjU2NTU4MA&ixlib=rb-1.2.1&q=85&w=2640';
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        const fetchImageInfoBlock = async () => {
            // const imageInfoBlock = await getRandomImage();
            const imageInfoBlock = [
                {
                  "src": "https://images.unsplash.com/photo-1612117357725-8915f4e25558?ixid=MnwzNDIzMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTY1NjgzMTE&ixlib=rb-1.2.1",
                  "credit": {
                    "imageLink": "https://unsplash.com/photos/IOQ9aZa0GeQ",
                    "location": null,
                    "userName": "Alex Lvrs",
                    "userLink": "https://unsplash.com/@sud_studio"
                  }
                }
              ];
            console.log(imageInfoBlock);
            setImageUrl(imageInfoBlock[0].src)
            console.log(imageUrl);
        };
       fetchImageInfoBlock();
        
    })
    return(
        <div
        className="fullscreen"
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined, width: props.width, height: props.height }}
        >
            {/* <Credits /> */}
            
            {cloneElement(props.children, { height: props.height, width: props.width })}
        </div>
    );
}

export default Unsplash;