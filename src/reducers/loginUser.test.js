import { loginUser } from './loginUser';
import * as actions from '../actions/actions';

describe('loginUser reducer', () => {
  it('should return initial state', () => {
    const expected = {};
    const result = loginUser(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should set a logged in user', () => {
    const initialState = {};
    const expected = {name:'Mason', id:1};
    const result = loginUser(initialState, actions.loginUser({name:'Mason', id:1}));
    expect(result).toEqual(expected);
  });
  it('should log out a user', () => {
    const initialState = {name:'Mason', id:1};
    const expected = {};
    const result = loginUser(initialState, actions.logoutUser())
    expect(result).toEqual(expected);
  });
});