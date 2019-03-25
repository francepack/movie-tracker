import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/actions';
import { Link } from 'react-router-dom';

class MovieInfo extends Component {
  render() {
    const { id, title, overview, poster_path, release_date, vote_average, vote_count, backdrop_path } = this.props
    const imageSrc = {backgroundImage: `url(http://image.tmdb.org/t/p/w342//${poster_path})` };
    const background = { backgroundImage: `url(http://image.tmdb.org/t/p/original${backdrop_path})` };
    const inactiveStar = <img src="https://img.icons8.com/windows/32/A9927D/filled-star.png" />;
    const activeStar = <img src="https://img.icons8.com/windows/32/FCB001/filled-star.png" />;
    const findStar = this.props.favorites.find(fav => fav === id);
    const star =
      <div className='star' onClick={() => {this.props.handleFavorite(id)}}>
        {findStar && activeStar}
        {!findStar && inactiveStar} 
      </div>;

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

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  handleFavorite: (id) => dispatch(toggleFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);