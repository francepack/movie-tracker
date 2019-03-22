export const getMovies = (movies) => ({
    type: 'GET_MOVIES',
    movies
});

export const favorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const loginUser = (userInfo) => ({
  type: 'LOGIN_USER',
  userInfo
})