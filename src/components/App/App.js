import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/actions';
import apiKey from '../../api_key/apiKey';
import Header from '../Header/Header';
import Movies from '../Movies/MoviesContainer';
import MovieInfo from '../MovieInfo/MovieInfo';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount = () => {
    this.fetchRecentMovies();
  };

  fetchRecentMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=1`;
    // const url2 = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=2`;
    try {
      const response = await fetch(url);
      const movies = await response.json();
      this.props.getMovies(movies.results);
    } catch (err) {
      throw new Error(err);
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="app">
        <div>
          <Header />
          {
            movies.length &&
            <Route exact path="/" render={() => {
              return <Movies id='recent' />
              }}  />
          }
          {
            movies.length &&
            <Route exact path='/favorites' render={() => (
              <Movies id='favorites' />
            )} />
          }
        </div>
        <Route exact path='/movie/:id' render={({ match }) => {
          const { id } = match.params;
          const movieInfo = movies.find(movie => movie.id === parseInt(id));
          if (movieInfo) {
            return <MovieInfo {...movieInfo} />
          }
        }} />
        {/* <Route exact path='/favorites' render={() => (
          <Movies id='favorites' />
        )} /> */}


      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  loginUser: state.loginUser,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies)),
})

App.propTypes = {
  movies: PropTypes.array.isRequired,
  loginUser: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);