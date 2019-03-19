import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            recentMovies: []
        }
    }

  componentDidMount() {
    const url = `https://api.themoviedb.org/`;
    // const url = `https://api.themoviedb.org/3/discover/movie?${apiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1`;
    // https://api.themoviedb.org/3/discover/movie?api_key=dcf6f510fd5d9ea5387a47d058ad1dfd&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1
    fetch(url)
      .then(response => response.json())
      .then(recentMovies => this.setState({recentMovies: recentMovies.results}))
        // .then(data => console.log(data))
    }

  render() {
    const { recentMovies } = this.state;
    console.log(recentMovies);
    const displayRecentMovies = recentMovies.map(movie => (<MovieCard {...movie} key={movie.title}/>))
    return (
      <div>
        {displayRecentMovies}
      </div>
    )
  }
}

export default Movies;