import React from 'react';

const MovieCard = ({ title, release_date, overview, poster_path }) => {
    const imageSrc = 'http://image.tmdb.org/t/p/w185//' + poster_path;
  return (
    <div>
        <h1>{title}</h1>
        <p>{release_date}</p>
        <p>{overview}</p>
        <img src={imageSrc} alt={title}></img>
    </div>
  )
}

export default MovieCard;