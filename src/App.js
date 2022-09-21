import React from 'react';
import './App.css';
import { Route } from 'wouter'
import logo from './Assets/logo.png'
import Home from './pages/Home';
import DetailView from './pages/detail';
import SearchResults from './pages/SearchResults';
import Context from './context/staticContext';
import { GifContextProvider } from './context/gifContext';

const App = () => {
  return (
    <Context.Provider value={{
      name: 'carlos',
      subscribete: true
    }}>
      <div className="App">
        <div>
          <img src={logo} alt='Logo'></img>
        </div>
        <section className='App-content'>
          <GifContextProvider>
            <Route 
              component={SearchResults} 
              path='/search/:keyword'/>
            <Route 
              component={Home} 
              path='/'/>
            <Route 
              component={DetailView} 
              path='/gif/:id'/>
          </GifContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
