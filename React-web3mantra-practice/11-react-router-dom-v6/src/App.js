import React from "react";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
