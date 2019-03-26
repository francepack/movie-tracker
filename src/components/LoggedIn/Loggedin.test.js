import React from 'react';
import LoggedIn from './LoggedIn';
import { shallow } from 'enzyme';

describe('LoggedIn', () => {
  beforeEach(() => {
    wrapper = shallow(
      <LoggedIn />
    )
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  //componentdidmount
  it('should add any stored favorites upon logging in', () => {

  });

  it('should getFavoriteMovies', () => {

  });

  it('should addStoredFavorites', () => {

  });

  it('should logout', () => {

  });

});