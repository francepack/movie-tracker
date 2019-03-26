import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LoggedIn extends Component {

  componentDidMount = () => {
    this.addStoredFavorites();
  }

  getFavoriteMovies = async (id) => {
    const backendUrl = `http://localhost:3000/api/users/${id}/favorites`;
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    try {
      const response = await fetch(backendUrl, options);
      const favorites = await response.json();
      return favorites.data
    } catch(err) {
      console.log(err)
    }
  }

  addStoredFavorites = async () => {
    const { id } = this.props.loginUser;
    const { favorites } = this.props;
    const favoritesArray = await this.getFavoriteMovies(id)
    favoritesArray.map(movie => {
      return this.props.favorites.push(movie.movie_id)
    })
    console.log(favorites);
  }

  logout = () => {
    const { logoutUser, switchDisplay } = this.props;
    if (this.props.loginUser) {
      logoutUser();
      switchDisplay('login');
    }
  }

  render() {
      const { name } = this.props.loginUser;
    return (
      <div className="user-display">
        <div className="user-welcome">Welcome {name}!</div>
        <div className="user-options">
          <Link to='/favorites' className='favorites-link'><span className='display-favorites-btn'>Favorites &nbsp;</span></Link> | <Link to='/' className='logout-link'><span className='logout-btn' onClick={this.logout}>&nbsp; Logout</span></Link>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    loginUser: state.loginUser,
    favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

LoggedIn.propTypes = {
  loginUser: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  logoutUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);