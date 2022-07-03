// import { useEffect, useState, cloneElement } from 'react';
// import getRandomImage from './api';
// import './index.css';

function Credits(props) {
    return(
        <div
        className="credits"
        >
            <div className="credit-element">
                <a href={props.credits.userLink+'?utm_source=Start&utm_medium=referral&utm_campaign=api-credit'}>
                    {props.credits.userName}
                </a>
            </div>
            {'/'}
            <div className="credit-element">
                <a href={props.credits.imageLink+'?utm_source=Start&utm_medium=referral&utm_campaign=api-credit'}>
                    Photo
                </a>
            </div>
            {'/'}
            <div className="credit-element">
                <a href='https://unsplash.com/?utm_source=Start&utm_medium=referral&utm_campaign=api-credit'>
                    Unsplash
                </a>
            </div>
            {props.credits.location!=null &&
            <div className="credit-element">
                {'/'}
                <a>
                    {props.credits.location}
                </a>
            </div>
            }
        </div>
    );
}

export default Credits;