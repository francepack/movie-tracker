export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return !loggedIn;
    default:
      return state;
  }
}