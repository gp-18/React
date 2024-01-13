import React from "react";

const AddForm = () => {
  const [form, setForm] = React.useState({});
  const [data, setData] = React.useState([]);

  function AddData() {
    setData([...data, form]);
    setForm(form);
  }
  return (
    <>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Enter the task "
        required
      />
      <input
        type="number"
        value={form.num}
        onChange={(e) => setForm({ ...form, num: e.target.value })}
        placeholder="Rate the Task"
        required
      />
      <button onClick={AddData}>Submit</button>

      {data.map((element, index) => {
        return (
          <div key={index}>
            <h3>{element.name}</h3>
            <h3>{element.num}</h3>
          </div>
        );
      })}
    </>
  );
};

export default AddForm;
