import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const [state, setS] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();
      setData(res);
    }

    getdata();
  }, [state]);
  return (
    <>
      <button onClick={() => setS(state + 5)}>{state}</button>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h1>{element.id}</h1>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </>
  );
};

export default App;
