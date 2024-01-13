import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [form , setForm] = React.useState({}) ;
  const [Data, setData] = useState([]);

  const AddData = () => {
    setData([...Data, form]);
    setForm(form) ;
  };

  const removeItem = (index) => {
    let arr = Data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handleClick = (e) =>{
      if(e.key ==="Enter" || e.key === "enter"){
        AddData();
      }
  }

  return (
    <>
      <h1 className="title">The Tracker</h1>
      <input type="text" 
      value={form.name} 
      onChange={(e) => setForm({...form , name: e.target.value })} onKeyPress={(e)=>handleClick(e)}/>
      <textarea
        name="textarea"
        id=""
        cols="30"
        rows="10"
        value={form.describe}
        onChange={(e) => setForm( {...form , describe : e.target.value })}
        onKeyPress={(e)=>handleClick(e)}
      />
      <button onClick={() => AddData()}>Add</button>
      <div className="data">
        <div className="data-val">
          <h3>Name</h3>
          <p>Description</p>
          <h3>Delete</h3>
        </div>
      </div>

      <div>
        <div className="data">
          {Data.map((item, index) => (
            <div key={index} className="data-val">
              <h3>{item.name}</h3>
              <p>{item.describe}</p>
              <button onClick={() => removeItem()} >Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
