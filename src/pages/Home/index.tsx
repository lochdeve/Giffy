import React, { useState } from "react";
import { Link }  from 'wouter'
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfList";
import './style.css'

const POPULAR_GIFS = ['Pandas','RickandMorty']

const Home = () => {
  const [keyword,setKeyword] = useState('');
  const gifs = useGifs();

  const handleSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault();
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={keyword} placeholder='Search a gif here'/>
        <button>
          <Link style={{fontSize:'15px'}} to={`/search/${keyword}`}>Search</Link> 
        </button>
      </form>
      <h3>Last Search</h3>
      <ListOfGifs gifs={gifs?.contextGifs?.gifs}/>
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