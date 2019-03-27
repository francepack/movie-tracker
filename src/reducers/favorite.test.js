import { favorite } from './favorite';
import * as actions from '../actions/actions';

describe('favorite reducer', () => {
    it('should return initial state', () => {
        const expected = [];
        const result = favorite(undefined, {});
        expect(result).toEqual(expected);
    });
    it('should add an id of a favorite movie if not already stored', () => {
        const initialState = [444];
        const expected = [444, 123];
        const result = favorite(initialState, actions.toggleFavorite(123))
        expect(result).toEqual(expected)
    });
    it('should remove an id of a favorite movie if stored already', () => {
        const initialState = [444, 123];
        const expected = [444];
        const result = favorite(initialState, actions.toggleFavorite(123))
        expect(result).toEqual(expected)
    });
});