import { useContext, useEffect, useState} from "react"
import getGifs from "../services/getGifs";
import GifContext from "../context/gifContext";

const useGifs = ({ keyword } = {keyword: null}) => {
  const [loading, setLoading] = useState(false);
  const contextGifs = useContext(GifContext);
  
  useEffect(() => {
    setLoading(true);
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    
    getGifs({ keyword: keywordToUse }).then(gifsGet => {
      contextGifs?.setGifs(gifsGet);
      setLoading(false);
      localStorage.setItem('lastKeyword', keywordToUse)
    })
  },[keyword]);
  
  return {loading, contextGifs}
}

export default useGifs;
