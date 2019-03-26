import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow } from 'enzyme';

describe('SignUpForm', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SignUpForm />
    )
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      email: '',
      password: ''
    });
  });

  it('should handleChange', () => {

  });

  it('should handleSignUp', () => {

  });
});