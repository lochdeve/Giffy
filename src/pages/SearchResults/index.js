import React from "react";
import ListOfGifs from "../../components/ListOfList";
import useGifs from "../../hooks/useGifs";

const SearchResults = ({params}) => {
  const {keyword} = params;
  const {loading, gifs} = useGifs(keyword);

  if (loading) return <i>cargando @</i>

  return (
    <>
      <ListOfGifs gifs={gifs}/>
    </>
  )
}
        
export default SearchResults;