import React from 'react';

const MovieInfo = ({ id, title, overview, poster_path, release_date, vote_average, vote_count, backdrop_path }) => {
    const imageSrc = 'http://image.tmdb.org/t/p/w342//' + poster_path;
    const background = { backgroundImage: `url(http://image.tmdb.org/t/p/original${backdrop_path})` };
  return (
      <div className='movie-info' style={background}>
          <div className='movie-image'>
            <img src={imageSrc} alt={title} />
          </div>
          <div className='movie-title'>
            <h2>{title}</h2>
            <p className='release-date'>{release_date}</p>
          </div>
          <div>
              <span>{vote_average}</span>
              <p>{vote_count}</p>
          </div>
          <div>
            <p className='movie-info'>{overview}</p>
          </div>
      </div>
    )
}

export default MovieInfo;