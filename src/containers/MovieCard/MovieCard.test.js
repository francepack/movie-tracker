import React from 'react';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import { shallow } from 'enzyme';
import * as actions from '../../actions';

describe('MovieCard', () => {
  let wrapper;
  let mockFavorites;
  beforeEach(() => {
    mockFavorites = [123, 444]
    wrapper = shallow(
      <MovieCard 
        favorites={mockFavorites}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
  describe('mapStateToProps', () => {
    it('should return an object with loginuser and favorites', () => {
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
      const action = actions.toggleFavorite({name: 'Movie1'})
      const mappedDispatch = mapDispatchToProps(mockDispatch)
      mappedDispatch.toggleFavorite({name: 'Movie1'})
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