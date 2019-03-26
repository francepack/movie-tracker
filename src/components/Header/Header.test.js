import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Header />
    )
  });
  
  it('should match snapshot when display is default login', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when display is signup', () => {
    wrapper.setState({'display': 'signup'});
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when display is loggedIn', () => {
    wrapper.setState({'display': 'loggedIn'});
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      display: 'login',
      isLoggedIn: false
    });
  });

  it('should be able to change state display with switchDisplay', () => {

  });
});