import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import apiKey from '../../api_key/apiKey';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            recentMovies: []
        }
    }

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(recentMovies => this.setState({recentMovies: recentMovies.results}))
    }

  render() {
    const { recentMovies } = this.state;
    // console.log(recentMovies);
    const displayRecentMovies = recentMovies.map(movie => (<MovieCard {...movie} key={movie.title}/>))
    return (
      <div>
        {displayRecentMovies}
      </div>
    )
  }
}



export default Movies;