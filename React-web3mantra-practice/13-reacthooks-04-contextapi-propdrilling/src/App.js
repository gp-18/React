import React, { createContext } from 'react'
import CompA from "./Components/CompA"

const sendData = createContext()

const App = () => {
  const data = " this is the data coming from directly app.js to comp C"
  return (
    <>
      <sendData.Provider value ={data}>
      <CompA/>
      </sendData.Provider>
    </>
  )
}

export default App
export {sendData}
