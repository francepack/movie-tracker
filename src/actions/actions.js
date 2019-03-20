export const getMovies = (movies) => ({
    type: 'GET_MOVIES',
    movies
});

export const loggedIn = (id) => ({
  type: 'TOGGLE_LOGIN',
  id
})