import ColorThief from 'colorthief';

function rgbToHex(rgb) {
  return `#${rgb
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join('')}`;
}

export default function getPalette(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject();
    }
    const image = new Image();
    image.src = url;
    image.crossOrigin = 'Anonymous';

    image.onload = () => {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(this, 3);
      // const result = _.uniq(palette, item => JSON.stringify(item));
      resolve(palette.map(rgbToHex));
    };
  });
}
