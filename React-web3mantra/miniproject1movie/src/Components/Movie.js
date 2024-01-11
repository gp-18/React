import React from 'react'
import "./Movie.css"


const Movie = (Props) => {
  return (
    <div className='movie'>
    <img src={Props.photo} alt="" />
    <p>{Props.title}</p>
    <p>{Props.year}</p>
    </div>
  )
}

export default Movie