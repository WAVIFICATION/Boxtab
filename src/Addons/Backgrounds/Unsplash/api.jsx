
async function getRandomImage() {
    const url = 'https://api.unsplash.com/photos/random';
    const params = new URLSearchParams();

    const headers = new Headers({ Authorization: 'Client-ID xxx' });
    const response = await fetch(`${url}?${params}`, { headers, cache: 'no-cache' });
    const body = [];
    body.push(await response.json())
    return body.map((image) => ({
        src: image.urls.raw,
        credit: {
          imageLink: image.links.html,
          location: image.location ? image.location.title : null,
          userName: image.user.name,
          userLink: image.user.links.html,
        },
      }));
}

export default getRandomImage;
