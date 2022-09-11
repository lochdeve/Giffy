import React from "react";
import './index.css'

const Gif = ({title, id, url}) => {
  return (
    <a href={`#${id}`} className="Gif">
      <h4>{title}</h4>
      <img src={url} alt='gifs'/>
    </a>
  )
}

export default Gif;