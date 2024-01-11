import React from "react";
import UserData from "./assets/components/UserData";

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const get = await fetch("https://jsonplaceholder.typicode.com/users");

      const ans = await get.json();
      setData(ans);
      console.log(ans);
    }
    getData();
  }, []);
  return <>
     <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={data}/>
            </tbody>
        </table>
  </>;
};

export default App;
