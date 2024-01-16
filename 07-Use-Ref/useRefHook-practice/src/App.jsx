import React from "react";

const App = () => {
  const [value, setValue] = React.useState("");
  const ans = React.useRef(0);
  const prevValue = React.useRef(" ");
  const inputField = React.useRef();

  const dataChange = (e) => {
    setValue(e.target.value);
  };

  const Change = () => {
    inputField.current.style.border = "2px solid red";
  };
  React.useEffect(() => {
    ans.current = ans.current + 1;
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <input ref={inputField} type="text" value={value} onChange={dataChange} />
      <h1>{ans.current}</h1>
      <h1>{prevValue.current}</h1>
      <button onClick={Change}>submit</button>
    </div>
  );
};

export default App;
