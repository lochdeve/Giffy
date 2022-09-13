import React from "react";
import {Link}  from 'wouter'

const POPULAR_GIFS = ['Pandas','RickandMorty']

const Home = () => {
  return (
    <>
      <h3>Most popular gifs</h3>
      <ul>
        {
          POPULAR_GIFS.map( popularGif => {
          return <li key={popularGif}>
              <Link to={`/</li>search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          })
        }
      </ul>
    </>
  ) 
};


export default Home;