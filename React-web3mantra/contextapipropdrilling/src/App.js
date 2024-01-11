import React, { createContext, useState } from 'react'
import Header from "./Components/Header"
import ComP from './Components/ComP';

const ThisIsContext = createContext();

const App = () => {
  const [data , useData] = useState("parthgupta");
  const [name , setName] = useState({name:"say my name" , age:18})
  return (
    <>
    <ThisIsContext.Provider value={{data , name }}>
      <Header/>
      <ComP/>
      </ThisIsContext.Provider>
    </>
  )
}

export default App
export{ThisIsContext};