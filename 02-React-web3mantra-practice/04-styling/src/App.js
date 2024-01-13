import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";

const App = () => {
  const name = "this is the jsx";
  return (
    <>
      <Header />
      <h1>this is the h1 of app.js</h1>
      <h3>{name}</h3>
      <p style={{ color: "red", fontSize: "40px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, est.p
      </p>
      <p style={{ backgroundColor: "orange", color: "white" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        eius possimus officiis nihil distinctio quisquam obcaecati, corrupti
        architecto ullam sapiente consectetur rerum labore deserunt? Mollitia
        repellat id adipisci natus voluptates?
      </p>
    </>
  );
};

export default App;
