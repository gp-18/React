import React from "react";

const App = () => {
  const [input, setInput] = React.useState("");
  const counter = React.useRef(0);
  let prevState = React.useRef(" ");
  const inputField = React.useRef() ;

  React.useEffect(() => {
    counter.current = counter.current + 1;
    prevState.current = input;
  }, [input]);

  function handle(e) {
    setInput(e.target.value);
  }

  const clickHandler = () => {
    inputField.current.focus();
  }
  return (
    <>
      <h1>useRef hook</h1>
      <input ref={inputField} type="text" value={input} onChange={handle} />

      <h4>render cause {counter.current} times</h4>

      <h1>{prevState.current}</h1>

      <button onClick={clickHandler}>click me</button>
    </>
  );
};

export default App;
