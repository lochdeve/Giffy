import React, {useEffect,useState} from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";

const ListOfGifs = ({keyword}) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({keyword}).then(gifs => setGifs(gifs))
  },[]);

  return (gifs.map(({id,title, url}) => 
        <Gif 
          key={id} 
          title={title} 
          id={id} 
          url={url}
        />
      )
  )
}
        
export default ListOfGifs;