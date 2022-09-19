import React, {useEffect,useState} from "react";
import ListOfGifs from "../../components/ListOfList";
import getGifs from "../../services/getGifs";

const SearchResults = ({params}) => {
  const {keyword} = params;
  const [gifs, setGifs] = useState({
    loading: false,
    results: []
  });

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

  return (
    <>
      <ListOfGifs gifs={gifs}/>
    </>
  )
}
        
export default SearchResults;