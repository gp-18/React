import React from 'react'


const reducer = (state , action) =>{
  if(action.type === "ADD"){
    return state + 1 ;
  }else if(action.type === "MIN"){
    return state - 1 ;
  }else if(action.type === "MUL"){
    return state * 1 ;
  }
  return state;
}

const App = () => {
  

  const [state , disptach] = React.useReducer(reducer,0);
  return (
   <>
      <h1>this is the useReducerHook</h1>
      <h2>{state}</h2>
      <button onClick={disptach({type:"ADD"})}>increment</button>
      <button onClick={disptach({type:"MIN"})}>decrement</button>
      <button onClick={disptach({type:"MUL"})}>multiply</button>
    </>
  )
}

export default App