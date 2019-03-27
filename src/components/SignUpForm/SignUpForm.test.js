import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow } from 'enzyme';
import { switchDisplay } from '../Header/Header'
import { mapDispatchToProps } from '../Login/Login';

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
    it('should call switch display when an ok response is recieved', async () => {
      const spy = spyOn(wrapper.instance(), 'props.switchDisplay');
      // const switchDisplay = jest.fn()
      const mockEvent = {preventDefault: jest.fn()};
      wrapper.setState({'name': 'Isaac', 'email': 'eyesack@aol.com', 'password': 'ILoveLamp'})
      window.fetch = jest.fn().mockReturnValue({
        json: () => Promise.resolve({
        ok: true,
        status: 200,
        })
      })
      
      await wrapper.instance().handleSignUp(mockEvent);
      expect(spy).toHaveBeenCalled();
    });
    it('should produce an alert if email is already in use', async () => {
      const mockEvent = {preventDefault: jest.fn()};
      wrapper.setState({'name': 'Isaac', 'email': 'eyesack@aol.com', 'password': 'ILoveLamp'})
      window.fetch = jest.fn().mockReturnValue({
        json: () => Promise.resolve({
        ok: true,
        status: 500,
        })
      })

      await wrapper.instance().handleSignUp(mockEvent);
      expect(alert).toHaveBeenCalled()
    });
  });
});