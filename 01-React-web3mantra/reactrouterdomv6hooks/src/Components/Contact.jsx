import React from "react";
import { Link, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <h1>THIS IS THE CONTACT SECTION</h1>
      <Link to={"insta"}>
        <h6>contact via instagram</h6>
      </Link>
      <Link to={"mail"}>
        <h6>contact via mail</h6>
      </Link>
      <Outlet />
    </>
  );
};

export default Contact;
