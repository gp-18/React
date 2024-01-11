import React from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";
import Insta from "./Components/Insta";
import Mail from "./Components/Mail";
import UserDetails from "./Components/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>

          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
