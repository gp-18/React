import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={()=> navigate("contact")}>Go to Contact Page</button>
    </>
  );
};

export default Home;
