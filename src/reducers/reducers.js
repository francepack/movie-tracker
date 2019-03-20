import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { loggedIn } from './loggedIn'


export const rootReducer = combineReducers({
    movies: getMovies,
    loggedIn: loggedIn
});