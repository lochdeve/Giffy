import React, {useState,useEffect} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import getGifs from './services/getGifs';

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs('simpson').then(gifs => setGifs(gifs))
  },[]);

  return (
    <div className="App">
      <section className='App-content'>
        <ListOfGifs gifs={gifs}></ListOfGifs>
      </section>
    </div>
  );
}

export default App;
