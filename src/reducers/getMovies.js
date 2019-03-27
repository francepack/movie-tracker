export const getMovies = (state = [], action) => {
  const { movies } = action;
  switch (action.type) {
    case 'GET_MOVIES':
      return movies;
    default:
      return state;
  }
}