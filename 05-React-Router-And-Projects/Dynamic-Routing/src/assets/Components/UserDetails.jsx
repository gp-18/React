import { useParams } from "react-router-dom";

const UserDetails = () => {
  // this is the one way
  // const params = useParams() ;
  // const userId = params.userId

  const { userId} = useParams();
  return (
    <div>
      UserDetails : {userId}
    </div>
  );
};

export default UserDetails;
