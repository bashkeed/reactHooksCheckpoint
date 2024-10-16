import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div>{movies.map((movies,index)=>
    
    <MovieCard key={index} {...movies}/>
  
    )}
    </div>
  )
}

export default MovieList