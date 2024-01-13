import React from 'react'

const App = () => {

  const[num , setNo] = React.useState(1); 


  function inc(){
    setNo(num + 1);
  }

  function dec(){
    setNo(num - 1);
  }

  return (
    <>
      <h1>useStateHook</h1>
      <div>
        <h2>{num}</h2>
        <button onClick={inc}>increment</button>
        <button onClick={dec}>decrement </button>
      </div>

    </>
  )
}

export default App
