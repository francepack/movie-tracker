import React from 'react';
import MovieInfo from './MovieInfo';
import { shallow } from 'enzyme';

describe('MovieInfo', () => {
  beforeEach(() => {
    wrapper = shallow(
      <MovieInfo />
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