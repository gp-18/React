import  { useContext } from "react";
import { CC } from "../App";
import CompC from "./CompC";
const CompB = () => {
  const uc = useContext(CC);
  return (
    <div>
      CompB
      <h1>{uc.FullName}</h1>
      <CompC/>
    </div>
  );
};

export default CompB;
