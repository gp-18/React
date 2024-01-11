import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Feature from "./Components/Feature";

const App = () => {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/About"} element={<About />}>
            <Route path="featured" element={<Feature />} />
            <Route path="new" element={<Product />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
