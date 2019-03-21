import React from 'react';

const MovieCard = ({ title, release_date, overview, poster_path }) => {
  const imageSrc = 'http://image.tmdb.org/t/p/w500//' + poster_path;
  const background = {backgroundImage: `url(${imageSrc})`}
  return (
    <div className='movie-card' style={background}>
    </div>
  )
}

export default MovieCard;