import React from "react";

const App = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState([]);

  function adddata() {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }
  return (
    <>
      <h1>Record Keeping</h1>

      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={adddata}>add</button>
      </div>

      <div>
        {data.map((element, index) => {
          return (
            <>
              <h1>{element.name}</h1>
              <h1>{element.email}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
