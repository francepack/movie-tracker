export const getMovies = (movies) => ({
    type: 'GET_MOVIES',
    movies
});

export const loggedIn = (id) => ({
  type: 'TOGGLE_LOGIN',
  id
})

export const favorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const loginUser = (userInfo) => ({
  type: 'LOGIN_USER',
  userInfo
})