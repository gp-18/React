import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserDetails = () => {
  const users = [
    { id: 1, name: "User 1 details" },
    { id: 2, name: "User 2 details" },
    { id: 3, name: "User 3 details" },
  ];
  return (
    <>
      <h1>User details</h1>
      {users.map((item) => (
        <Link to={`/about/${item.id}`} key={item.id}>
          <h5>{item.name}</h5>
        </Link>
      ))}
      <Outlet />
    </>
  );
};

export default UserDetails;
