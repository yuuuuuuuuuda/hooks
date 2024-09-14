import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the reality is a simulation.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.7,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const addMovie = () => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= (filterRating || 0)
    );
  });

  return (
    <div className="App">
      <h1>My Movie App</h1>

      {/* Add new movie form */}
      <div>
        <input
          type="text"
          placeholder="Movie title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Movie description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          min="0"
          max="10"
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      {/* Filter movies */}
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />

      {/* Movie list */}
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
