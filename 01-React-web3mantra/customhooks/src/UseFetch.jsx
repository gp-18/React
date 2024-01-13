import React from 'react'

const UseFetch = (url) => {
    const [data , setData] = React.useState([]);

    React.useEffect(()=>{
      async function apicall(){
        const getdata = await fetch(url)
  
        const output = await getdata.json();
        setData(output);
      }
  
      apicall();
    })
  return [data];
}

export default UseFetch