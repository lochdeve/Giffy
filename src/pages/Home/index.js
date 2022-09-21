import React, { useState } from "react";
import {Link, useLocation}  from 'wouter'
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfList";

const POPULAR_GIFS = ['Pandas','RickandMorty']

const Home = () => {
  const [keyword,setKeyword] = useState('');
  const [path, goToLocation] = useLocation();
  const {loading, gifs} = useGifs();

  const handleSubmit = event => {
    event.preventDefault();
    goToLocation(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={keyword} placeholder='Search a gif here'/>
      </form>
      <h3>Last Search</h3>
      <ListOfGifs gifs={gifs}/>
      <h3>Most popular gifs</h3>
      <ul>
        {
          POPULAR_GIFS.map( popularGif => {
          return <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          })
        }
      </ul>
    </>
  ) 
};


export default Home;