import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./assets/Components/Home.jsx";
import Users from "./assets/Components/Users.jsx";
import NavBar from "./assets/Components/Navbar.jsx";
import Error from "./assets/Components/Error.jsx";
import UserDetails from "./assets/Components/UserDetails.jsx";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Users"} element={<Users />} >
          <Route path={":userId"} element={<UserDetails />} />
          </Route>
          <Route path={"*"} element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
