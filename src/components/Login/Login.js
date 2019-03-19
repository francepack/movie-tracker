import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        }
    }
  render() {
    return (
      <div className='login-form'>
          <form>
            <label>User Name: <input type='text' name='userName' /></label>
            <label>Password: <input type='password' name='password' /></label>
            <button type='submit' className='login-btn'>Login</button>
          </form>
      </div>
    )
  }
}

export default Login;