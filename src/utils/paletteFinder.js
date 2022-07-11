import ColorThief from 'colorthief';
import _ from 'lodash';

export const getPalette = url => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject();
    }
    const image = new Image();
    image.src = url;
    image.crossOrigin = 'Anonymous';

    image.onload = function () {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(this, 3);
      // const result = _.uniq(palette, item => JSON.stringify(item));
      resolve(palette.map(rgbToHex));
    };
  });
};

const rgbToHex = rgb =>
  '#' +
  rgb
    .map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');
