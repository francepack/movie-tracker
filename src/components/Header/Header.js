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

  toggleSignUpForm = () => {
    const { displaySignUpForm } = this.state;
    this.setState({
      displaySignUpForm: !displaySignUpForm
    })
  }

  render() {
    const { displaySignUpForm } = this.state;
    return (
        <header>
          <h1>Movie Tracker</h1>
          <div>
          {
            !displaySignUpForm &&
            <div>
              <Login />
              <div className='signup' onClick={this.toggleSignUpForm}>Need an account?</div>
            </div>
          }
          {
            displaySignUpForm &&
            <div>
              <SignUpForm />
              <div className='signup' onClick={this.toggleSignUpForm}>Return to login</div>
            </div>
          }
          </div>
        </header>
    )
  }
}

export default Header;