import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { postFetch, deleteFetch } from '../../api';

class MovieInfo extends Component {

  handleFavorite = (movieId) => {
    const { favorites } = this.props;
    if (!favorites.includes(movieId)) {
      this.addFavorite();
    } else {
      this.deleteFavorite(movieId);
    }
  }

  addFavorite = async () => {
    const url = 'users/favorites/new'
    const { id, title, poster_path, release_date, vote_average, overview, loginUser, toggleFavorite } = this.props;
    console.log('movie info props: ', this.props)
    const favInfo = { movie_id: id, user_id: loginUser.id, title, poster_path, release_date, vote_average, overview };
    await postFetch(url, 'POST', favInfo);
    toggleFavorite(id);
  }

  deleteFavorite = async (movieId) => {
    const { id, toggleFavorite, loginUser } = this.props;
    const url = `users/${loginUser.id}/favorites/${movieId}`;
    await deleteFetch(url);
    toggleFavorite(id);
  }

  render() {
    const { id, title, overview, poster_path, release_date, vote_average, vote_count, backdrop_path, favorites } = this.props;
    const imageSrc = {backgroundImage: `url(http://image.tmdb.org/t/p/w342//${poster_path})` };
    const background = { backgroundImage: `url(http://image.tmdb.org/t/p/original${backdrop_path})` };

    const star = (
      <div className="star" onClick={() => { this.handleFavorite(id) }}>
        {!favorites.includes(id) && <i className="fas fa-star" />}
        {favorites.includes(id) && <i className="fas fa-star active-favorite" />}
      </div>
    );

    return (
      <div className='movie-info'>
        <div className='movie-image' style={imageSrc}></div>
        <article className='info-section' style={background}>
          <div className='overlay'>
            <div className='movie-title'>
              {star}
              <h2>{title}</h2>
              <p className='release-date'>Release Date: {release_date}</p>
            </div>
            <div className='review'>
              <p>Rated <span>{vote_average}</span>/10</p>
              <p className='vote-count'>({vote_count} viewer votes)</p>
            </div>
            <div className='movie-description'>
              <h4>Description</h4>
              <p>{overview}</p>
            </div>
            <Link to='/'>
              <p className='return'>Return to all movies</p>
            </Link>
          </div>
        </article>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginUser: state.loginUser,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: id => dispatch(toggleFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);