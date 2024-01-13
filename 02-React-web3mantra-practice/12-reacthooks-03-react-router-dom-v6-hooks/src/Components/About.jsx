import React from "react";
import { Link, Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <>
        <Link to="Feature">Feature</Link>
        <Link to="Product">Product</Link>
        <Outlet />
      </>
    </>
  );
};

export default About;
