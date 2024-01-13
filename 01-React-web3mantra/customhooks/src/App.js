import React from 'react'
import UseFetch from './UseFetch'

const App = () => {
 const [data] = UseFetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)
  return (
    <>
        <h1>this is the custom hook</h1>
        {
          data.map((element , index) =>{
            return(
            <div key = {index}>
              <h1>{element.firstName}</h1>
            </div>
            )
          })
        }
    </>
  )
}

export default App