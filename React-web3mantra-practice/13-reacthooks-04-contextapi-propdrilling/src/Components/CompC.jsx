import React, { useContext } from 'react'
import  {sendData} from "../App"
const CompC = () => {
    const data = useContext(sendData)
  return (
    <>
        <h1>{data}</h1>
    </>
  )
}

export default CompC