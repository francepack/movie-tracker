export const getMovies = (movies) => ({
    type: 'GET_MOVIES',
    movies
});

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const loginUser = (userInfo) => ({
  type: 'LOGIN_USER',
  userInfo
})