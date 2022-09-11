import React, {useState,useEffect} from 'react';
import './App.css';

const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=pfRUiRDZMN313y3EeN5yxjLpTUhQRYe4&q=simpsons&limit=10&offset=0&rating=g&lang=en';

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    //    setGifs(DIFFERENTS_GIFS);
    fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const {data} = response;
      const gifs = data.map(image => image.images.downsized_medium.url);
      setGifs(gifs)
    })  
  },[]);

  return (
    <div className="App">
      <section className='App-content'>
      {
        gifs.map(gif => <img src={gif} alt='gifs'/>)
      }
      </section>
    </div>
  );
}

export default App;
