import React from 'react';

const MovieCard = ({ title, release_date, overview, poster_path }) => {
  const imageSrc = 'http://image.tmdb.org/t/p/w500//' + poster_path;
  const background = {backgroundImage: `url(${imageSrc})`}
  return (
    <div className='movie-card' style={background}>
        {/* <img src={imageSrc} alt={title} className='card-image'></img> */}
        {/* <h2 className='movie-title'>{title}</h2> */}
        {/* <p className='release-date'>{release_date}</p>
        <p className='movie-info'>{overview}</p> */}
    </div>
  )
}

export default MovieCard;