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

  describe('handleChange', () => {
    it('should update state name according to what is typed', () => {
      const mockEvent = {target: {name:'name', value:'Isaac'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual('Isaac');
    });
    it('should update state email according to what is typed', () => {
      const mockEvent = {target: {name:'email', value:'eyesack@aol.com'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('email')).toEqual('eyesack@aol.com');
    });
    it('should update state password according to what is typed', () => {
      const mockEvent = {target: {name:'password', value:'ILoveLamp'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('password')).toEqual('ILoveLamp');
    });

  });


  describe('handleSignUp', () => {
    it('should call handleSignup when form is submitted', () => {
      const spy = spyOn(wrapper.instance(), 'handleSignUp');
      const mockEvent = {preventDefault: jest.fn()};
      wrapper.instance().forceUpdate();
      wrapper.find('form').simulate('submit', mockEvent);
      expect(spy).toHaveBeenCalled();
    });
    it('should', () => {
      const mockEvent = {preventDefault: jest.fn()};

    });
    it('', () => {

    });
  });
});