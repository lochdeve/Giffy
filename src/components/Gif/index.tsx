import React from "react";
import './index.css'

interface GifObject {
  title: string,
  id: string,
  url: string
}

const Gif = ({title, id, url}:GifObject) => {
  return (
    <a href={`/gif/${id}`} className="Gif">
      <h4>{title}</h4>
      <img src={url} alt='gifs'/>
    </a>
  )
}

export default Gif;