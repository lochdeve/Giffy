import React from 'react';
import './App.css';
import { Route } from 'wouter'
import logo from './Assets/logo.png'
import Home from './pages/Home';
import DetailView from './pages/detail';
import SearchResults from './pages/SearchResults';

const App = () => {
  return (
    <div className="App">
      <div>
        <img src={logo} alt='Logo'></img>
      </div>
      <section className='App-content'>
        <Route 
          component={SearchResults} 
          path='/search/:keyword'/>
        <Route 
          component={Home} 
          path='/'/>
        <Route 
          component={DetailView} 
          path='/'/>
      </section>
    </div>
  );
}

export default App;
