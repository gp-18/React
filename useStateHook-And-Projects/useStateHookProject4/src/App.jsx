import React from "react";

const App = () => {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [Add, setAdd] = React.useState("");

  let sumCalc = (e) => {
    e.preventDefault();
    if (num1 === 0 || num2 === 0) {
      alert("enter the correct value");
    } else {
      let Add = parseInt(num1) + parseInt(num2);
      setAdd(Add);
    }
  };

  let resetVal = (e) => {
    e.preventDefault();
    setAdd(0);
    window.location.reload();
  };
  return (
    <>
      <form onSubmit={sumCalc}>
        <input
          type="text"
          placeholder="Enter the number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the number 1"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button type="submit">Calculate</button>
        <button onClick={resetVal}>Reset</button>
        <h1>{Add}</h1>
      </form>
    </>
  );
};

export default App;
