import React from 'react'

const App = () => {
  const [count , setCount] = React.useState(0);
  const [name , setName] = React.useState('');

  const expensiveCalculation =(num) =>{
    for(let i = 0 ; i < 100000000 ; i++){}
    return num ;
  }

  // The expensive function will only run when its dependencies have changed. jab count ki value change hogi tab hi ye function call hoga use ref ki thara hi h kinoff usmai kasie ki jo chnage ho tab hi render hota tha , ismai iski value change hogyi tab hi call hogaa function 
  const calculation =  React.useMemo(() =>expensiveCalculation(count),[count]) ;
  return (
    <>
    
      <button onClick={() =>setCount(count+1)}>increment</button>
      <h1>count : {count}</h1>

      <input type="text" name="" id="" onChange={(e) =>setName(e.target.value)}
      />

      <h1>name : {name}</h1>
    </>
  )
}

export default App