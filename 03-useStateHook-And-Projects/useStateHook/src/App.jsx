import React from "react";

const App = () => {
  const [num, setNum] = React.useState(1);

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    setNum(num - 1);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement </button>
    </>
  );
};

export default App;
