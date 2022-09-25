const API_KEY ='pfRUiRDZMN313y3EeN5yxjLpTUhQRYe4';

const getGifs = ({keyword = 'simpsons'} = {}) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(API_URL)
  .then(res => res.json())
  .then(response => {
    const {data = []} = response;
    const gifs = data.map((image:any) => {
      const {images, id, title} = image;
      const {url} = images.downsized_medium;
      return {title, id, url}
    });
    return gifs;
  })
}
  
export default getGifs;