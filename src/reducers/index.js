import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { loginUser } from './loginUser';
import { favorite } from './favorite';

export const rootReducer = combineReducers({
    movies: getMovies,
    loginUser: loginUser,
    favorites: favorite
});