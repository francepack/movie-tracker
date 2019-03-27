import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import { Link } from 'react-router-dom';
import { postFetch, deleteFetch } from '../../api';
import PropTypes from 'prop-types';

export class MovieCard extends Component {

  handleFavorite = (movieId) => {
    const { favorites, loginUser } = this.props;
    if (this.isEmpty(loginUser)) {
      console.log('NO USER LOGGED IN')
      alert('Please create account to use this feature')
    } else {
      console.log('login user if block entered');
      if (!favorites.includes(movieId)) {
        this.addFavorite();
      } else {
        this.deleteFavorite(movieId);
      }
    }
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  addFavorite = async () => {
    const url = 'users/favorites/new';
    const { id, title, poster_path, release_date, vote_average, overview, loginUser, toggleFavorite } = this.props;
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
      const { poster_path, id, favorites } = this.props;
      const imageSrc = 'http://image.tmdb.org/t/p/w500//' + poster_path;
      const background = { backgroundImage: `url(${imageSrc})` };

      const star = (
        <div className="star">
          {!favorites.includes(id) && <i className="fas fa-star" />}
          {favorites.includes(id) && <i className="fas fa-star active-favorite" />}
        </div>
      );

      return (
        <div className='movie-card' style={background}>
          <Link to={`/movie/${id}`} key={id}>
            <div className='linkdiv'>
            </div>
          </Link>
          <div onClick={() => {this.handleFavorite(id)}}>
            {star}
          </div>
        </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  loginUser: state.loginUser,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
});

MovieCard.propTypes = {
  loginUser: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);