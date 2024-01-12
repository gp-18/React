// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <>
      {/* <Link to={"/"}><h1>Home</h1></Link>
      <Link to={"/About"}><h1>About</h1></Link>
      <Link to={"/Contact"}><h1>Contact</h1></Link> */}

      {
        <div>
          <NavLink style={navLinkStyles} to={"/"}>
            <h1>Home</h1>
          </NavLink>
          
          <NavLink style={navLinkStyles} to={"/About"}>
            <h1>About</h1>
          </NavLink>

          <NavLink style={navLinkStyles} to={"/Contact"}>
            <h1>Contact</h1>
          </NavLink>

          <NavLink style={navLinkStyles} to={"/User"}>
            <h1>User</h1>
          </NavLink>
        </div>
      }
    </>
  );
};

export default NavBar;
