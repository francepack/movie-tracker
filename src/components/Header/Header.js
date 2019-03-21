import React, { Component } from 'react';
import Login from '../Login/Login';
import SignUpForm from '../SignUpForm/SignUpForm';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      displaySignUpForm: false,
    }
  }

  render() {
    return (
        <header>
          <h1>Movie Tracker</h1>
          <div>
            <Login />
            <div className='signup'>Need an account?</div>
          </div>
        </header>
    )
  }
}

export default Header;