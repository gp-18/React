import React from 'react'
import propTypes from 'prop-types'
import Props2 from './Props2'

const Props1 = (props) => {
  return (
    <>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <Props2 name = {props.name} age ={props.age}  target="the value of last props pass will show"></Props2>
    </>
  )
}
Props1.propTypes ={
    name : propTypes.string,
    age : propTypes.number,
}

Props1.defaultProps ={
    name:"Name",
    age:0 
}

export default Props1