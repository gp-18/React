import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}><h1>Home</h1></NavLink>
      <NavLink to={"Users"}><h1>Users</h1></NavLink>
    </div>
  )
}

export default Navbar