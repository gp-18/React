import React from "react";
import ComponentsC from "./ComponentsC";
import ComponentsD from "./ComponentsD";

const ComponentsB = (props) => {
  const details = "this is the new details from the component B";
  return (
    <>
      <h1>this is ComponentsB</h1>
      <h1>{props.value}</h1>
      <ComponentsC  value = {props.value}/>
      <ComponentsD  details = {details}/>
    </>
  );
};

export default ComponentsB;
