import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import FavContact from "./components/FavContact";
import LessUseContact from "./components/LessUseContact";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Contact"} element={<Contact />}>
            <Route index element={<FavContact />} />
            <Route path={"FavContact"} element={<FavContact />} />
            <Route path={"LessUseContact"} element={<LessUseContact />} />
          </Route>

          <Route path={"Users"} element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>

          <Route path={"*"} element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
