import React from "react";

const App = () => {
  const [state, setState] = React.useState(10);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getdata() {
      const val = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const ans = await val.json();

      setData(ans);
    }

    getdata();
  },[state]);

  return (
    <>
      <button
        onClick={() => {
          setState(state + 10);
        }}
      >
        click me to add {state}
      </button>

      {data.map((element) => {
        return (
          <>
            <h1>{element.firstName}</h1>
            <h2>{element.id}</h2>
          </>
        );
      })}
    </>
  );
};

export default App;
