import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { loginUser } from './loginUser';

export const rootReducer = combineReducers({
    movies: getMovies,
    loginUser: loginUser
    // error: error
});