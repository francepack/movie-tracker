import React from 'react';
import Movies from './Movies';
import { shallow } from 'enzyme';

describe('Movies', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Movies />
    )
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      favoriteMovies: []
    });
  });

  it('should getFavorites', () => {

  });

  it('should fetchMovie', () => {

  });

  //componentdidmount?
});