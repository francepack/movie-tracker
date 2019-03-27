import React from 'react';
import { MovieInfo, mapStateToProps, mapDispatchToProps } from './MovieInfo';
import { shallow } from 'enzyme';

describe('MovieInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieInfo />
    )
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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
    it('should call dispatch when using toggleFavorite', () => {
      const mockDispatch = jest.fn();
      const action = actions.toggleFavorite({name: 'Mason'})
      const mappedDispatch = mapDispatchToProps(mockDispatch)
      mappedDispatch.toggleFavorite({name: 'Mason'})
      expect(mockDispatch).toHaveBeenCalledWith(action)
    });
  });
  describe('handleFavorite', () => {
    
  });

  describe('addFavorite', () => {

  });

  describe('deleteFavorite', () => {

  });
});