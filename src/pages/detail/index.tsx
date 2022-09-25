import React from "react";
import Gif from "../../components/Gif";
import useGifs from "../../hooks/useGifs";

const DetailView = ({params}:any) => {
  const { id} = params;
  const gifs = useGifs();
  const gif = gifs?.contextGifs?.gifs.find(gif => 
    gif.id === id
  )
  console.log(id)
    if (gif===undefined) {
      return <div>There was an error</div>
    }else{
      return (<Gif {...gif}/>) 
    }
}

export default DetailView;
