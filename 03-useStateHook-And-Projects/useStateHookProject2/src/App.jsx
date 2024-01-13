import React from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [bmi, setBmi] = React.useState("");
  const [message, setMessage] = React.useState("");

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight == 0 || height == 0) {
      alert("please enter the valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("you are healthy weight");
      } else {
        setMessage("you are over weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your bmi is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
