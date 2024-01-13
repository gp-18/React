import React from 'react'
import propTypes from 'prop-types'

const Props2 = (props) => {
  return (
    <>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.target}</h1>

    </>
  )
}

Props2.propTypes = {
    name:propTypes.string,
    age:propTypes.number,
    target:propTypes.string
}

Props2.defaultProps ={
    name:"Name",
    age:0,
    target:"string Targeted"
}

export default Props2