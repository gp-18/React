import React from 'react'

const App = () => {
  const inputField = React.useRef();

  const clickKar = () =>{
    inputField.current.style.border = "2px solid red";
    console.log(inputField.current.value);
  }
  return (
    <>
      <h1>this is the use ref hook </h1>
      <input type="text" ref={inputField} />
      <button onClick={() => clickKar()}>submit</button>
    </>
  )
}

export default App

