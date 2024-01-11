import React from "react";
import ComponentsA from "./Components/ComponentsA";
const App = () => {
  const name = "passing data to component A" ;
  return (
    <>
      <ComponentsA  name ={name} age = {20}/>
    </>
  );
};

export default App;
