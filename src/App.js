import React, {  useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from 'wouter'

const App = () => {
  const [keyword, setKeyword] = useState('panda');

  return (
    <div className="App">
      <section className='App-content'>
      <h4>Pagina de Gifs</h4>
      <Link href='/gif/pandas'> Gif de pandas</Link>
      <Link href='/gif/rickandmorty'> Gif de Rick and Morty</Link>
        <Route 
        component={ListOfGifs} 
        path='/gif/:keyword'/>
      </section>
    </div>
  );
}

export default App;
