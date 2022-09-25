import React from "react";
import ListOfGifs from "../../components/ListOfList";
import useGifs from "../../hooks/useGifs";

const SearchResults = ({params}:any) => {
  const {keyword} = params;
  const {loading, contextGifs} = useGifs({keyword});
  
  return (
    <>
      <ListOfGifs gifs={contextGifs?.gifs}/>
    </>
  )
}
        
export default SearchResults;