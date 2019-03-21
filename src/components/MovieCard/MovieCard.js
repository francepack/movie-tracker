import React from 'react';

const MovieCard = ({ title, release_date, overview, poster_path }) => {
    const imageSrc = 'http://image.tmdb.org/t/p/w185//' + poster_path;
  return (
    <div className='movie-card'>
        <img src={imageSrc} alt={title} className='card-image'></img>
        <h2>{title}</h2>
        <p className='release-date'>{release_date}</p>
        <p>{overview}</p>
    </div>
  )
}

export default MovieCard;