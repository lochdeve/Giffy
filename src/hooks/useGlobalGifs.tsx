import { useContext } from "react";
import  GifsContext from "../context/gifContext";

const useGlobalGifs = () => {
  return useContext(GifsContext);
}

export default  useGlobalGifs;