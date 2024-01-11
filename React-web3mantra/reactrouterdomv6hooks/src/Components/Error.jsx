import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate(-1);
  return (
    <>
        <h1>404 PAGE NOT FOUND </h1>
         <button onClick={navigate(-1)}>GO BACK</button> 
    </>
  )
}

export default Error