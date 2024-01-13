import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>THIS IS THE HEADER</h1>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/contact"}>
        <h1>Contact</h1>
      </Link>
      <Link to={"/about"}>
        <h1>About</h1>
      </Link>
    </>
  );
};

export default Header;
