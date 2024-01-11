import React from "react";
import Props1 from "./components/Props1";

const App = () => {
  return (
    <>
      <h1>this is the app</h1>
      <Props1 name="parth gupta" age={20} />
      <Props1 name="props passing" age="web3mantar" /> 
    </>
  );
};

export default App;
