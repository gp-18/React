import React from "react";

const App = () => {
  const [state, setState] = React.useState(0);
  const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   console.log("use Effect");
  // }, );

  // only in inital render
  // React.useEffect(() => {
  //   console.log("use Effect");
  // }, []);

  // only when state change then call
  // React.useEffect(() => {
  //   console.log("use Effect");
  // }, [num]);

  React.useEffect(() => {
    async function getData() {
      const get = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=&idStarts=1001"
      );
      const ans = await get.json();
      setData(ans);
      console.log(ans);
    }
    getData();
  }, [state]);

  return (
    <>
      <button onClick={() => setState(state + 5)}>CLick Me {state}</button>

      {data.map((element, index) => {
        return (
          <div key={index}>
            <h3>{element.id}</h3>
          </div>
        );
      })}
    </>
  );
};

export default App;
