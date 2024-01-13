import { useContext } from "react";
import { CC } from "../App";

const CompC = () => {
  const uc = useContext(CC);
  return (
    <div>
      CompC
      <h1>{uc.Age}</h1>
    </div>
  );
};

export default CompC;
