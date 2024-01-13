
import CompC from "./CompC";

// eslint-disable-next-line react/prop-types
const CompB = ({data}) => {
  return (
    <div>
      CompB
      <CompC data ={data}/>
    </div>
  );
};

export default CompB;
