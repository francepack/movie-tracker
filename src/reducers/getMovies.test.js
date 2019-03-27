import { getMovies } from './getMovies';
import * as actions from '../actions';

describe('getMovies reducer', () => {
    it('should return initial state', () => {
        const expected = [];
        const result = getMovies(undefined, {});
        expect(result).toEqual(expected);
    });
    it('should return movies', () => {
        const initialState = [];
        const expected = [{ name: 'movie1' }, { name: 'movie2' }]
        const result = getMovies(initialState, actions.getMovies([{ name: 'movie1' }, { name: 'movie2' }]))
        expect(result).toEqual(expected)
    });
});