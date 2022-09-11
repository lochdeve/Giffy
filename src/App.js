import React, {  useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

const App = () => {
  const [keyword, setKeyword] = useState('panda');

  return (
    <div className="App">
      <section className='App-content'>
        <button onClick={() => {setKeyword('mapache')}}>Cambiar gif</button>
        <ListOfGifs keyword={keyword}/>
      </section>
    </div>
  );
}

export default App;
