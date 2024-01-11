import React from 'react'
import Header from './Components/Header'
import Movie from './Components/Movie'
import movies from "./Components/movie.json"
import "./App.css"

const App = () => {
  return (
    <>
      <Header/>
      <div className="main">
      {
        
        movies.map((element) => {
          return(
          <Movie title={element.Title} year={element.Year} photo = {element.Poster} />);
        })
      }
        
      </div>
    </>
  )
}

export default App
