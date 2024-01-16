import React from "react";

const reducer = (state, action) => {
  if (action.type == "INC") {
    return state + 1;
  } else if (action.type == "DEC") {
    return state - 1;
  } else if (action.type == "MUL") {
    return state * 2;
  } else if (action.type == "DIV") {
    return state / 2;
  }
  return state;
};

const App = () => {
  const [state, disptach] = React.useReducer(reducer, 0);
  return (
    <>
      <h1>use reducer hook</h1>
      <h2>{state}</h2>
      <button onClick={() => disptach({ type: "INC" })}>increment by 1</button>
      <button onClick={() => disptach({ type: "DEC" })}>decrement by 1</button>
      <button onClick={() => disptach({ type: "MUL" })}>multiply by 2</button>
      <button onClick={() => disptach({ type: "DIV" })}>divide by 2</button>
    </>
  );
};

export default App;
