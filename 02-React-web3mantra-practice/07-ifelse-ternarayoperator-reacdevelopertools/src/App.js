import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const App = () => {
  const login = true;
  return <>{login === false ? <Header /> : <Footer />}</>;
};

export default App;
