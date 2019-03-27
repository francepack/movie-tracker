export const favorite = (state = [], action) => {
  const { id } = action;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      if (state.includes(id)) {
        return state.filter(idNum => idNum !== id)
      } else {
        return [...state, id];
      }
    default:
      return state;
  }
}