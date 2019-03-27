import React from 'react';
import { LoggedIn, mapStateToProps, mapDispatchToProps } from './LoggedIn';
import { shallow } from 'enzyme';
import * as actions from '../../actions'

describe('LoggedIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LoggedIn 
        loginUser= {name}
      />
    )
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add any stored favorites upon logging in', () => {

  });

  it('should getFavoriteMovies', () => {

  });

  it('should addStoredFavorites', () => {

  });

  it('should logout', () => {

  });

  describe('mapStateToProps', () => {
    it('should return an object with currentuser and favorites', () => {
      const mockState = {
        loginUser: {name: 'Isaac'},
        favorites: [123, 444],
        movies: [{title: 'Hey'}, {title: 'anotherMovie'}]
      }
      const expected = {
        loginUser: {name: 'Isaac'},
        favorites: [123, 444]
      }
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected)
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call dispatch when using logoutUser', () => {
      const mockDispatch = jest.fn();
      const action = actions.logoutUser({name: 'Mason'})
      const mappedDispatch = mapDispatchToProps(mockDispatch)
      mappedDispatch.logoutUser({name: 'Mason'})
      expect(mockDispatch).toHaveBeenCalledWith(action)
    });
  });
});