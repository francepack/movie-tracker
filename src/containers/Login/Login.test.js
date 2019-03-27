import React from 'react';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { shallow } from 'enzyme';
import * as actions from '../../actions';

let wrapper;
describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Login />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      id: 0,
      name: '',
      email: '',
      password: '',
      error: ''
    });
  });

  describe('handleChange', () => {
    it('should update state name according to what is typed', () => {
      const mockEvent = { target: { name: 'name', value: 'Isaac' } };
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual('Isaac');
    });
    it('should update state password according to what is typed', () => {
      const mockEvent = { target: { name: 'password', value: 'ILoveLamp' } };
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('password')).toEqual('ILoveLamp');
    });
  });

  it('should handleLogin', () => {

  });

  it('should logIn', () => {

  });
  describe('mapStateToProps', () => {
    it('should return an object with currentuser and favorites', () => {
      const mockState = {
        loginUser: {name: 'Isaac'},
        favorites: [123, 444],
        movies: [{title: 'Hey'}, {title: 'anotherMovie'}]
      }
      const expected = {
        currentUser: {name: 'Isaac'},
        favorites: [123, 444]
      }
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected)
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call dispatch when using loginUser', () => {
      const mockDispatch = jest.fn();
      const action = actions.loginUser({name: 'Mason'})
      const mappedDispatch = mapDispatchToProps(mockDispatch)
      mappedDispatch.loginUser({name: 'Mason'})
      expect(mockDispatch).toHaveBeenCalledWith(action)
    });
  });
});