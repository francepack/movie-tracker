import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  logIn = (e) => {
    e.preventDefault();
    // const { email, password } = this.state;

  }


  render() {
    const { email, password } = this.state;
    return (
      <div className='login-form'>
          <form>
            <label>User Name: <input type='text' name='email' value={email} onChange={this.handleChange}/></label>
            <label>Password: <input type='password' name='password' value={password} onChange={this.handleChange} /></label>
            <button type='submit' className='login-btn'>Login</button>
          </form>
      </div>
    )
  }
}

export default Login;