import { Link, Outlet, useNavigate } from "react-router-dom";


const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Contact</div>
      <button onClick={() => navigate(-1)}>go back to home page </button>

      <div>
        <Link to={"FavContact"}>
          <h1>FavContact</h1>
        </Link>

        <Link to={"LessUseContact"}>
          <h1>LessUseContact</h1>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Contact;
