import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/actions';

class MovieCard extends Component {

    render() {
      const { poster_path, id, handleFavorite, favorites } = this.props;
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
          <div onClick={() => {handleFavorite(id)}}>
            {star}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
  handleFavorite: (id) => dispatch(toggleFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);