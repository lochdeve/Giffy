import React from 'react';
import './App.css';
import { Link, Route } from 'wouter'
import Logo from '../../Assets/logo.png'
import Home from '../../pages/Home';
import DetailView from '../../pages/detail';
import SearchResults from '../../pages/SearchResults';
import Context from '../../context/staticContext';
import { GifsContextProvider } from '../../context/gifContext';

const App = () => {
  return (
    <Context.Provider value={{
      name: 'carlos',
    }}>
      <div className="App">
        <Link to='/'>
          <img src={Logo} alt='Logo'></img>
        </Link>

        <section className='App-content'>
          <GifsContextProvider>
            <Route 
              component={SearchResults} 
              path='/search/:keyword'/>
            <Route 
              component={Home} 
              path='/Giffy'/>
            <Route 
              component={DetailView} 
              path='/gif/:id'/>
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
