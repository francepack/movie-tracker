import React from 'react';
import { Header, mapStateToProps } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;

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
    wrapper.instance().switchDisplay('signup')
    expect(wrapper.state()).toEqual({
      display: 'signup',
      isLoggedIn: false
    });
  });
  it('mapStateToProps should return an object witha loginUser', () => {
    const mockState = {
      loginUser: {name: 'Isaac'},
      favorites: [123, 444],
      movies: [{title: 'Hey'}, {title: 'anotherMovie'}]
    }
    const expected = {
      loginUser: {name: 'Isaac'}
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected)
  });
});