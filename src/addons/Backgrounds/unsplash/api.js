export async function getRandomImage() {
  const url = 'https://api.unsplash.com/photos/random';
  const params = new URLSearchParams();
  params.append('collections', 1263731);
  const headers = new Headers({
    Authorization: 'Client-ID ' + process.env.REACT_APP_Unsplash_API_Key,
  });
  const response = await fetch(`${url}?${params}`, {
    headers,
    cache: 'no-cache',
  });
  const body = [];
  body.push(await response.json());
  return body.map(image => ({
    src: image.urls.raw,
    credit: {
      imageLink: image.links.html,
      location: image.location ? image.location.title : null,
      userName: image.user.name,
      userLink: image.user.links.html,
    },
  }));
}
