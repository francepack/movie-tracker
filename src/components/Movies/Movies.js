import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/actions';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

export class Movies extends Component {

  render() {
    const { movies } = this.props;
    console.log('props in movie component', movies.results)
    const displayRecentMovies = movies.map(movie => (
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <MovieCard {...movie} key={movie.title} />
      </Link>
    ))

    return (
      <div className='movie-container'>
        {displayRecentMovies}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

// export default Movies;