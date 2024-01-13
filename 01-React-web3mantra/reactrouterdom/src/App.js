import React from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <>

        <Header />
        
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Error />} />

        </Routes>

      </>
    </Router>
  );
};

export default App;
