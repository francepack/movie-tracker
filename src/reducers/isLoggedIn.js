export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return !isLoggedIn;
    default:
      return state;
  }
}