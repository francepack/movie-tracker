import React from 'react';
import MovieCard from './MovieCard';
import { shallow } from 'enzyme';

describe('MovieCard', () => {
  beforeEach(() => {
    let wrapper;

    wrapper = shallow(
      <MovieCard />
    )
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleFavorite', () => {

  });

  it('should addFavorite', () => {

  });

  it('should deleteFavorite', () => {

  });
});