import { Outlet, Link } from "react-router-dom";

const Users = () => {
  const users = [
    {
      id: "1",
      name: "user-name-1",
    },

    {
      id: "2",
      name: "user-name-2",
    },

    {
      id: "3",
      name: "user-name-3",
    },

    {
      id: "4",
      name: "user-name-4",
    },
  ];
  return (
    <div>
      {users.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/users/${item.id}`}>
              <h5>{item.name}</h5>
            </Link>
          </div>
        );
      })}

      <Outlet />
    </div>
  );
};

export default Users;
