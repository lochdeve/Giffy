import React, {useEffect,useState} from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";

const ListOfGifs = ({params}) => {
  const [gifs, setGifs] = useState({
    loading: false,
    results: []
  });
  const {keyword} = params;
  useEffect(() => {
    setGifs(actualGif => (
        { loading: true, results: actualGif.results}
      )
    );
    getGifs({keyword}).then(gifs => {setGifs(gifs);
      setGifs({ loading: false, results: gifs})
    })
  },[keyword]);

  if (gifs.loading) return <i>cargando @</i>

  return (gifs.results.map(({id, title, url}) => 
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