import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard'
import { Movies, mapStateToProps } from './Movies';
import { shallow } from 'enzyme';



describe('Movies', () => {
  let wrapper;
  let mockMovies;
  beforeEach(() => {
    mockMovies = [{title:'hey'}, {title:'what?'}]
    wrapper = shallow(
      <Movies 
        movies= {mockMovies}
      />
      )
    const displayRecentMovies = <MovieCard />;
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      favoriteMovies: []
    });
  });
  describe('mapStateToProps', () => {
    it('should return an object with favorites', () => {
      const mockState = {
        loginUser: {name: 'Isaac'},
        favorites: [123, 444],
        movies: [{title: 'Hey'}, {title: 'anotherMovie'}]
      }
      const expected = {
        favorites: [123, 444]
      }
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected)
    });
  });

  describe('should getFavorites', () => {

  });

  describe('should fetchMovie', () => {

  });
});