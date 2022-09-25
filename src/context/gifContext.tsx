import React, {useState} from 'react'

interface Params {
  children?: React.ReactElement[]
}

interface GifType {
  id:string
  title:string
  url:string
}

interface Global {
  gifs: GifType[],
  setGifs: React.Dispatch<React.SetStateAction<GifType[]>>
}

const Context = React.createContext<Global | null>(null)

export function GifsContextProvider ({children}:Params) {
  const [gifs, setGifs] = useState<GifType[]>([])

  return <Context.Provider value={{gifs, setGifs}}>
    {children}
  </Context.Provider>
}

export default Context