export const favorite = (state = [], action) => {
  const { id } = action;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
    if (state.includes(id)){
      console.log('reducers id', id)
        console.log('togglefav if entered')
        return state.filter(idNum => idNum !== id)
      } else {
        console.log('togglefav else entered')
        return [...state, id];
      }
    default:
      return state;
  }
}