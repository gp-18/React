import React from "react";
import ComponentsB from "./ComponentsB";
const ComponentsA = (props) => {
    const value ="this is from the component A"
  return (
    <>
      <h1>this is ComponentsA</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <ComponentsB  name = {props.name} value = {value}/>
    </>
  );
};

export default ComponentsA;
