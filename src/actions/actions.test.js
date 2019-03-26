import * as actions from './actions';
// import { isMainThread } from 'worker_threads';

describe('actions', () => {
  it('should return a type of GET_MOVIES with movies', () => {
    const movies = [{name: 'ConAir'}, {name: 'Home Alone'}];
    const expected = {
      type: 'GET_MOVIES',
      movies
    };
    const result = actions.getMovies(movies);
    expect(result).toEqual(expected);
  });

  it('should return a type of TOGGLE_FAVORITE with id', () => {
    const movie = {name: 'Get Out', id: 1};
    const expected = {
      type: 'TOGGLE_FAVORITE',
      id: movie.id
    }
    const result = actions.toggleFavorite(movie);
    expect(result).toEqual(expected);
  });

  it('should return a type of LOGIN_USER with userinfo', () => {
    const user = { name: 'Isaac' };
    const expected = {
      type: 'LOGIN_USER',
      userInfo: user.name
    };
    const result = actions.loginUser(user);
    expect(result).toEqual(expected);
  });
  
  it('should return a type of LOGOUT_USER', () => {
    const expected = {
      type: 'LOGOUT_USER'
    };
    const result = actions.logoutUser;
    expect(result).toEqual(expected);
  });
});