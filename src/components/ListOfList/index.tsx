import React from "react";
import Gif from "../Gif";

const ListOfGifs = ({gifs}:any) => {
  return (
    <div>
      { 
        gifs.map(({id, title, url}:any) => 
          <Gif 
            key={id} 
            title={title} 
            id={id} 
            url={url}
          />
        )
      }
  </div>
  )
}
        
export default ListOfGifs;