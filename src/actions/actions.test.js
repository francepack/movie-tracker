import * as actions from './actions';
import { isMainThread } from 'worker_threads';

describe('actions', () => {
  it('should return a type of GET_MOVIES with movies', () => {
    const movies = [{name: 'ConAir'}, {name: 'Home Alone'}]
    const expected = {
      type: 'GET_MOVIES',
      movies
    }
    const result = actions.getMovies(movies)
    expected(result).toEqual(expected);
  });
  it('should return a type of GET_MOVIES with movies', () => {

  });
  it('should return a type of GET_MOVIES with movies', () => {

  });
  it('should return a type of GET_MOVIES with movies', () => {

  });
});