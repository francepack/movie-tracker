import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/actions';

class MovieCard extends Component {

    render() {
      const { title, release_date, overview, poster_path, id, handleFavorite } = this.props
      const imageSrc = 'http://image.tmdb.org/t/p/w500//' + poster_path;
      const background = {backgroundImage: `url(${imageSrc})`}
      
      //give onclick, also shortcircuit for what renders. 
      //do that on if id is included in fav array
      const star =
        <div className='star'> 
          {/* {props.favorites.includes(id) &&
            <img src="https://img.icons8.com/windows/32/FCB001/filled-star.png" />
          }
          {!props.favorite.includes(id) &&
            <img src="https://img.icons8.com/windows/32/A9927D/filled-star.png" />
          } */}
          <img src="https://img.icons8.com/windows/32/A9927D/filled-star.png" />
        </div>
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
})

const mapDispatchToProps = (dispatch) => ({
  handleFavorite: (id) => dispatch(toggleFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);