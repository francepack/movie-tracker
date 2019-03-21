import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/actions';
import apiKey from '../../api_key/apiKey';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import MovieInfo from '../MovieInfo/MovieInfo';

class App extends Component {
  componentDidMount = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=1`;
    try {
      const response = await fetch(url);
      const movies = await response.json();
      console.log('movies: ',movies)
      this.props.getMovies(movies.results);
    } catch (err) {
      throw new Error(err);
    }
  };

  render() {
    const { movies } = this.props;
    console.log('props in app', movies)
    return (
      <div className="app">
        <div>
          <Header />
          {
            movies.length &&
              <Route exact path="/" component={Movies} />
          }
        </div>
        <Route exact path='/movie/:id' render={({ match }) => {
          const { id } = match.params;
          const movieInfo = movies.find(movie => movie.id === parseInt(id));
          console.log('movie info: ', movieInfo);
          if (movieInfo) {
            return <MovieInfo {...movieInfo} />
          }
        }} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
