import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { loggedIn } from './loggedIn'
import { loginUser } from './loginUser';

export const rootReducer = combineReducers({
    movies: getMovies,
    loggedIn: loggedIn,
    loginUser: loginUser
    // error: error
});