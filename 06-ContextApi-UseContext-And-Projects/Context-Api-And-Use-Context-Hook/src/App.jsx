import React, { createContext } from "react";
import CompA from "./components/CompA";

const sendData = createContext();

const App = () => {
  const [state, setState] = React.useState("Parth Gupta");
  return (
    <div>
      <sendData.Provider value={state}>
        <CompA data={state} />
      </sendData.Provider>
    </div>
  );
};

export default App;
// eslint-disable-next-line react-refresh/only-export-components
export {sendData} ;