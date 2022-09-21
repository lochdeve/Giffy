import React, { useContext } from "react";
import Context from "../../context/staticContext";
import GifContext from "../../context/gifContext";

const DetailView = ({params}) => {
  const context = useContext(Context);
  const {gifs} = useContext(GifContext);
  console.log(gifs);
  return (<>

  </>) 
}

export default DetailView;
