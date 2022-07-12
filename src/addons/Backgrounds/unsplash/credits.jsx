/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useEffect, useState, cloneElement } from 'react';
// import getRandomImage from './api';
// import './index.css';
import Link from '@mui/material/Link';
import config from 'config.json';

function Credits({ credits }) {
  return (
    <div className="credits">
      <div className="credit-element">
        <Link
          href={`${credits.userLink}?utm_source=${config.AppName}&utm_medium=referral&utm_campaign=api-credit`}
          underline="hover"
          color="inherit"
        >
          {credits.userName}
        </Link>
      </div>
      /
      <div className="credit-element">
        <Link
          href={`${credits.imageLink}?utm_source=${config.AppName}&utm_medium=referral&utm_campaign=api-credit`}
          underline="hover"
          color="inherit"
        >
          Photo
        </Link>
      </div>
      /
      <div className="credit-element">
        <Link
          href={`https://unsplash.com/?utm_source=${config.AppName}&utm_medium=referral&utm_campaign=api-credit`}
          underline="hover"
          color="inherit"
        >
          Unsplash
        </Link>
      </div>
      {credits.location != null && (
        <div className="credit-element">
          /
          <Link underline="hover" color="inherit">
            {credits.location}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Credits;
