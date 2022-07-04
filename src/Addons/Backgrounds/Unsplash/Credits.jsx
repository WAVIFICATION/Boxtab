// import { useEffect, useState, cloneElement } from 'react';
// import getRandomImage from './api';
// import './index.css';
import Link from '@mui/material/Link';

function Credits(props) {
    return(
        <div
        className="credits"
        >
            <div className="credit-element">
                <Link href={props.credits.userLink+'?utm_source=Start&utm_medium=referral&utm_campaign=api-credit'} underline="hover" color="inherit">
                    {props.credits.userName}
                </Link>
            </div>
            {'/'}
            <div className="credit-element">
                <Link href={props.credits.imageLink+'?utm_source=Start&utm_medium=referral&utm_campaign=api-credit'} underline="hover" color="inherit">
                    Photo
                </Link>
            </div>
            {'/'}
            <div className="credit-element">
                <Link href='https://unsplash.com/?utm_source=Start&utm_medium=referral&utm_campaign=api-credit' underline="hover" color="inherit">
                    Unsplash
                </Link>
            </div>
            {props.credits.location!=null &&
            <div className="credit-element">
                {'/'}
                <Link underline="hover" color="inherit">
                    {props.credits.location}
                </Link>
            </div>
            }
        </div>
    );
}

export default Credits;