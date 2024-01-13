import React from "react";

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const get = await fetch("https://fakestoreapi.com/products");
      const ans = await get.json();
      setData(ans);
      console.log(ans);
    }

    getData();
  }, []);
  return (
    <>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h1>{element.title}</h1>
            <h3>{element.price}</h3>
            <p>{element.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default App;
