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
            <Login />
          }
          <div className='signup' onClick={this.toggleSignUpForm}>Need an account?</div>
          {
            displaySignUpForm &&
            <SignUpForm />
          }
          </div>
        </header>
    )
  }
}

export default Header;