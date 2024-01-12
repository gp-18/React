
import { Link, Outlet} from "react-router-dom";
const Users = () => {
  const users = [
    { id: 1, name: "User 1 details" },
    { id: 2, name: "User 2 details" },
    { id: 3, name: "User 3 details" },
  ];
  return (
    <div>
      Users
      {users.map((item) => (
        <Link to={`/users/${item.id}`} key={item.id}>
          <h5>{item.name}</h5>
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Users;
