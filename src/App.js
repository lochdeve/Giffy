import React, {useState,useEffect} from 'react';
import './App.css';

const GIFS =['https://media4.giphy.com/media/ssYuHGAAz8FMrFF0JN/giphy.gif?cid=ecf05e478e5ldzp4wbxap37k6x65i00thw4u4qomxqp5igrv&rid=giphy.gif&ct=g','https://media0.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif?cid=ecf05e478e5ldzp4wbxap37k6x65i00thw4u4qomxqp5igrv&rid=giphy.gif&ct=g'];

const DIFFERENTS_GIFS = [
  'https://media4.giphy.com/media/jUwpNzg9IcyrK/giphy.gif?cid=ecf05e470nn5rs4qre5nwkvanzf2id1hoqt2xvvgytlnynas&rid=giphy.gif&ct=g','https://media1.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif?cid=ecf05e470nn5rs4qre5nwkvanzf2id1hoqt2xvvgytlnynas&rid=giphy.gif&ct=g'
]

const App = () => {
  const [gifs, setGifs] = useState(GIFS);

  useEffect(() => {
    console.log('Se ejecuto');
    setGifs(DIFFERENTS_GIFS);
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
