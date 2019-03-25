import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

export class Movies extends Component {

  render() {
    const { movies } = this.props;
    console.log('props in movie component', movies.results)
    const displayRecentMovies = movies.map(movie => (
      // <Link to={`/movie/${movie.id}`} key={movie.id}>
        <MovieCard {...movie} key={movie.title} />
      // {/* </Link> */}
    ))

    return (
      <div className='movie-container'>
        {displayRecentMovies}
      </div>
    )
  }
}

export default Movies;