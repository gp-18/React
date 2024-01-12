// import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/about"}>
        <h1>About</h1>
      </Link>
      <Link to={"/Contact"}>
        <h1>Contact</h1>
      </Link>
    </>
  );
};

export default Header;
