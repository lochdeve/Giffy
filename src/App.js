import React, {useState} from 'react';
import './App.css';

const GIFS =['https://media4.giphy.com/media/ssYuHGAAz8FMrFF0JN/giphy.gif?cid=ecf05e478e5ldzp4wbxap37k6x65i00thw4u4qomxqp5igrv&rid=giphy.gif&ct=g','https://media0.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif?cid=ecf05e478e5ldzp4wbxap37k6x65i00thw4u4qomxqp5igrv&rid=giphy.gif&ct=g'];

const App = () => {
  const [gifs, setGifs] = useState(GIFS);

  return (
    <div className="App">
      <section className='App-content'>
        <img src={gifs}/>
      </section>
    </div>
  );
}

export default App;
