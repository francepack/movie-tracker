import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';

let wrapper;
describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Login />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      email: '',
      password: '',
      error: ''
    });
  });

  it('should handleChange', () => {

  });

  it('should handleLogin', () => {

  });

  it('should logIn', () => {

  });
});