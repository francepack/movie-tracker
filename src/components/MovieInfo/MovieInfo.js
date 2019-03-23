import React from 'react';

const MovieInfo = ({ id, title, overview, poster_path, release_date, vote_average, vote_count, backdrop_path }) => {
  const imageSrc = {backgroundImage: `url(http://image.tmdb.org/t/p/w342//${poster_path})` };
  const background = { backgroundImage: `url(http://image.tmdb.org/t/p/original${backdrop_path})` };
  //give onclick, also shortcircuit for what renders. 
  //do that on if id is included in fav array
  const star =
  <div className='star'> 
    {/* {props.favorite &&
      <img src="https://img.icons8.com/windows/32/FCB001/filled-star.png" />
    }
    {!props.favorite &&
      <img src="https://img.icons8.com/windows/32/A9927D/filled-star.png" />
    } */}
    <img src="https://img.icons8.com/windows/32/A9927D/filled-star.png" />
  </div>

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
          <p className='return'>Return</p>
        </div>
      </article>
    </div>
  )
}

export default MovieInfo;