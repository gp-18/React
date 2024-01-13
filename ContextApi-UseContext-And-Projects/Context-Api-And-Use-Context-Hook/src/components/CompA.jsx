
import CompB from "./CompB";

// eslint-disable-next-line react/prop-types
const CompA = ({data}) => {
  return (
    <div>
      CompA
      <CompB data={data}/>
    </div>
  );
};

export default CompA;
