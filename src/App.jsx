import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import Filter from "./components/Filter";
import movies from "./components/movies"

function App() {
  const [title, setTitle] = useState(0)
   const [allMovies, setMovies] = useState(movies);

  return (
    <>
      <h1>Welcome to the Movie App</h1>
      <h2>Filter By</h2>
      <div className="flex gap-2">
        <label>Movie Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search movie title"
        />
      </div>
      {title ? (
        <Filter title={title} movies={allMovies} />
      ) : (
        <MovieList movies={allMovies} />
      )}
    </>
  );
}

export default App
