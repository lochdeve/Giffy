import React from "react";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

interface GifType {
  id:string
  title:string
  url:string
}

interface Params {
  id: string
}

const DetailView = ({id}:any) => {
  const gifs = useGlobalGifs();
  const gif = gifs?.gifs.find(gif => 
    gif.id === id
  )
    if (gif===undefined) {
      return <div>There was an error</div>
    }else{
      return (<Gif {...gif}/>) 
    }
}

export default DetailView;
