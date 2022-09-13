import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from 'wouter'
import logo from './Assets/logo.png'
import Home from './pages/Home';


const App = () => {

  return (
    <div className="App">
      <section className='App-content'>
      <img src={logo} alt='Logo'></img>
        <Route 
        component={ListOfGifs} 
        path='/search/:keyword'/>
        <Route 
        component={Home} 
        path='/'/>
      </section>
    </div>
  );
}

export default App;
