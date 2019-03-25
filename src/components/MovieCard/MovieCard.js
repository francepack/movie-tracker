import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/actions';
import { Link } from 'react-router-dom';


class MovieCard extends Component {

    render() {
      const { title, release_date, overview, poster_path, id, handleFavorite } = this.props
      const imageSrc = 'http://image.tmdb.org/t/p/w500//' + poster_path;
      const background = {backgroundImage: `url(${imageSrc})`}
      const inactiveStar = <img src="https://img.icons8.com/windows/32/A9927D/filled-star.png" />;
      const activeStar = <img src="https://img.icons8.com/windows/32/FCB001/filled-star.png" />;
      const findStar = this.props.favorites.find(fav => fav === id);
      const star =
        <div className='star'>
          {findStar && activeStar}
          {!findStar && inactiveStar} 
        </div>; 
  
      return (
        <div className='movie-card' style={background}>
          <Link to={`/movie/${id}`} key={id}>
            <div className='linkdiv'>
            </div>
          </Link>
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