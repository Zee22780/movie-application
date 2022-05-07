import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';

function App() {

  const [movies, setMovies] = useState([
  {
      "Title": "Kill Bill: Vol. 1",
      "Year": "2003",
      "imdbID": "tt0266697",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      "Title": "Kill Bill: Vol. 2",
      "Year": "2004",
      "imdbID": "tt0378194",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"
  },
  {
      "Title": "Kill Bill: The Whole Bloody Affair",
      "Year": "2011",
      "imdbID": "tt6019206",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQyZTgyYmQtNmExMS00YzNkLWIyOTAtYmVkNjAwZGE5ZDM1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
  },
])

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList 
          movies={movies}
        />
      </div>
    </div>
  );
}

export default App;
