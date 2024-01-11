import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "black ",
    };
  };

  return (
    <>
      <h1>THIS IS THE HEADER</h1>
      <NavLink style={navLinkStyles} to={"/"}>
        <h1>Home</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        <h1>Contact</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        <h1>About</h1>
      </NavLink>
    </>
  );
};

export default Header;
